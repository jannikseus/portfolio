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
- GitHub Actions publishes snapshot images on pushes to `main` with tags: `edge` and commit SHA
- GitHub Actions publishes release images on Git tags `vX.Y.Z` with tags: `vX.Y.Z`, `vX.Y`, `vX`, `latest`, and commit SHA

```sh
bun run build
bun run start
```

Pull the published image with:

```sh
docker pull ghcr.io/<owner>/<repo>:v0.0.5

For GitOps production manifests, pin exact release tags:

```yaml
image: ghcr.io/<owner>/<repo>:v0.0.5
```
```

## Internationalization

- Language switch supports `en` and `de`
- Translations live in `src/lib/i18n/messages/`
- Locale is stored in a `locale` cookie
