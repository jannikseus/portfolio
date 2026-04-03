FROM oven/bun:1.3.11 AS builder
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

FROM oven/bun:1.3.11-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

COPY package.json bun.lock ./
RUN bun install --production --frozen-lockfile

COPY --from=builder /app/build ./build
COPY --from=builder /app/static ./static

EXPOSE 3000
CMD ["bun", "build/index.js"]

