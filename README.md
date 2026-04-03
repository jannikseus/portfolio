# Portfolio

Personal portfolio scaffold built with SvelteKit, Bun, Tailwind CSS, and shadcn-svelte components.

## Stack

- SvelteKit + TypeScript
- Bun package manager/runtime
- Tailwind CSS v4
- shadcn-svelte component system

## Routes

- `/` home
- `/about`
- `/projects`
- `/contact`
- `/lab` experimental area

## Development

```sh
bun install
bun run dev
```

## Quality checks

```sh
bun run check
bun run build
```

## Production (Bun-first)

- Uses `@sveltejs/adapter-node` for SSR output
- Start built server with Bun runtime
- GitHub Actions publishes container images to GHCR on `main`
- Pushing tags like `v1.2.3` creates a GitHub Release and updates `CHANGELOG.md`

```sh
bun run build
bun run start
```

Pull the published image with:

```sh
docker pull ghcr.io/<owner>/<repo>:latest
docker pull ghcr.io/<owner>/<repo>:v1.2.3
```

## Internationalization

- Language switch supports `en` and `de`
- Translations live in `src/lib/i18n/messages/`
- Locale is stored in a `locale` cookie
