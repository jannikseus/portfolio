FROM oven/bun:1.3.11-slim AS builder
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --ignore-scripts

COPY . .
RUN bun run prepare && bun run build
RUN echo "=== /app contents ===" \
    && ls -la /app \
    && echo "=== build directory ===" \
    && ls -la /app/build || true \
    && echo "=== generated directories ===" \
    && find /app -maxdepth 3 -type d \
       \( -name build -o -name .svelte-kit \)

FROM oven/bun:1.3.11-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

COPY package.json bun.lock ./
RUN bun install --production --frozen-lockfile --ignore-scripts

COPY --from=builder --chown=bun:bun /app/build ./build
COPY --from=builder --chown=bun:bun /app/static ./static

EXPOSE 3000
USER bun
CMD ["bun", "build/index.js"]
