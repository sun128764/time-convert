# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Deployment to Cloudflare Workers

This project is configured to deploy to Cloudflare Workers/Pages.

### Prerequisites

Install Wrangler CLI (included as dev dependency, or install globally):

```bash
npm install -g wrangler
```

### Deployment Steps

1. Build the project for Cloudflare:
```bash
npm run build:cf
```

Note: The regular `npm run build` command builds with a `/timeconvert/` base path for subdirectory deployments. Use `npm run build:cf` for root-level Cloudflare deployments.

2. Deploy to Cloudflare Pages:
```bash
npm run deploy
```

Or deploy directly with wrangler:
```bash
npx wrangler pages deploy dist
```

### Local Development with Cloudflare

To test the Cloudflare Pages environment locally:

```bash
npm run build:cf
npm run cf:dev
```

### Configuration

The project includes:
- `wrangler.toml` - Cloudflare Workers configuration
- `functions/_middleware.ts` - Handles SPA routing for Vue Router

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
