FROM node:24-slim AS builder
WORKDIR /app
COPY --from=oven/bun:1.3.11-slim /usr/local/bin/bun /usr/local/bin/bun

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --ignore-scripts

COPY . .
RUN bun run prepare && bun run build \
    && test -f build/index.js

FROM node:24-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

COPY --from=oven/bun:1.3.11-slim /usr/local/bin/bun /usr/local/bin/bun
COPY package.json bun.lock ./
RUN bun install --production --frozen-lockfile --ignore-scripts

COPY --from=builder --chown=node:node /app/build ./build
COPY --from=builder --chown=node:node /app/static ./static

EXPOSE 3000
USER node
CMD ["node", "build/index.js"]