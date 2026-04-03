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

```sh
bun run build
bun run start
```

## Internationalization

- Language switch supports `en` and `de`
- Translations live in `src/lib/i18n/messages/`
- Locale is stored in a `locale` cookie
