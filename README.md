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
- `/blog` and `/blog/<slug>`

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
docker pull ghcr.io/jannikseus/portfolio:vX.Y.Z
```

For GitOps production manifests, pin exact release tags:

```yaml
image: ghcr.io/jannikseus/portfolio:vX.Y.Z
```

### Push a new release

After the PR has merged into `main`, make sure `package.json` has a new semantic version (`X.Y.Z`) and `CHANGELOG.md` has the corresponding dated release notes. If the merged PR did not include these updates, make and merge a release-preparation PR first. The version in `package.json` must match the release tag.

Fetch the latest `main` and tags, then verify the version you intend to release:

```sh
git fetch origin main --tags
git switch main
git pull --ff-only origin main
test "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)"

VERSION=1.2.3 # Replace with the version in package.json
test "$(node -p "require('./package.json').version")" = "$VERSION"
```

Create an annotated tag on the merged `main` commit and push it:

```sh
git tag -a "v$VERSION" -m "Release v$VERSION" origin/main
git push origin "v$VERSION"
```

A push to `main` publishes only the `edge` and commit-SHA snapshot images. Pushing the `vX.Y.Z` tag starts the release workflow, which checks the version, publishes the `vX.Y.Z`, `vX.Y`, `vX`, `latest`, and commit-SHA image tags, and creates a GitHub Release with generated notes. Check the `release-image` workflow run and the GitHub Release before deploying; use the exact `vX.Y.Z` image tag for production.

## Internationalization

- Language switch supports `en` and `de`
- Translations live in `src/lib/i18n/messages/`
- Blog posts are Markdown files with frontmatter in `src/lib/content/blog/`. Add one file per locale using `<slug>.<locale>.md`.
- Locale is stored in a `locale` cookie
