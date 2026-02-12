<!-- .github/copilot-instructions.md - guidance for AI coding agents -->
# Copilot instructions for uiuxcode (myapp)

Short, actionable notes to help an AI contributor be productive in this repository.

## Big picture
- This is a small React app built with Vite. Entry point: `src/main.jsx` which renders `src/App.jsx`.
- UI components live under `src/components/` and use plain `.css` files colocated with each component (e.g. `src/components/CreditCardScreen.jsx` and `CreditCardScreen.css`).
- No router or global state library is present; prefer local state or prop drill unless you add a new dependency.

## Build / run / lint
- Development: `npm run dev` (starts Vite). If `dev` fails, run `npx vite` as fallback.
- Production build: `npm run build` and preview with `npm run preview`.
- Lint: `npm run lint` (ESLint). The project includes `eslint.config.js` at repo root — follow its rules.

## Important repo-specific details
- Vite is overridden to `rolldown-vite` in `package.json` (`vite` resolves to `npm:rolldown-vite@7.2.5`). Be careful when editing `vite.config.js` or assuming Vite's behavior.
- React compiler is enabled via `@vitejs/plugin-react` + `babel-plugin-react-compiler` (see `vite.config.js`). Avoid removing this configuration unless you understand impact on development/build performance.
- Files use ESM (`"type": "module"` in package.json) and `.jsx` extensions for components.

## Conventions & patterns
- Component pattern: simple functional components, default export. Example: `CreditCardScreen.jsx` exports a stateless UI component with hard-coded content — treat this as UI-only by default.
- Styling: plain CSS files imported at top of component (no CSS Modules or styled-components). Keep selectors specific to component to avoid global collisions.
- Assets: static assets live under `public/` or `src/assets/` — prefer `public/` for truly public files and `src/assets` for imported assets.

## When changing UI or adding features
- Add new components under `src/components/`. Use `.jsx` and a matching `.css` file.
- If adding routes or global state, include a short note in the PR describing why the dependency is needed and a migration plan.

## Examples (common tasks)
- To add a new screen component: create `src/components/MyScreen.jsx` and `src/components/MyScreen.css`, import it in `src/App.jsx` and verify `npm run dev` loads with HMR.
- To update ESLint rules: edit `eslint.config.js` and run `npm run lint` to confirm no new errors.

## Files to inspect for context
- Entry: `src/main.jsx`
- App shell: `src/App.jsx`
- Example component: `src/components/CreditCardScreen.jsx` + `src/components/CreditCardScreen.css`
- Build config: `vite.config.js`, `package.json`, `eslint.config.js`

## Do not assume
- There are no tests or test runner configured — do not add tests without proposing a test framework.
- No API/backend code in this repo. Any data in components is static/mock data unless new endpoints are added and documented.

If any part of this is unclear or you'd like me to expand examples (PR templates, commit message style, or test setup suggestions), tell me which area to iterate on.
