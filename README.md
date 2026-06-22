# Mateke Web Studio

A high-performance, animated marketing site for an IT/web development agency, built with React, Vite, and GSAP.

## Stack

- **React 19 + Vite** — app shell and build tooling
- **GSAP + ScrollTrigger** — entrance sequences, scroll reveals, the typed terminal effect, and the odometer-style stat counters
- **Swiper** — the auto-playing portfolio carousel
- **react-icons** — UI and social icons

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it with `npm run preview`.

## Editing content

Almost everything text-based — nav links, hero copy, stats, services, portfolio items, testimonials, blog posts — lives in one file: `src/data/content.js`. Edit that file rather than hunting through components.

To add or change a portfolio project, edit the `portfolio` array in `src/data/content.js`:

```js
{
  title: 'Your Project',
  category: 'Category here',
  desc: 'One or two sentence description.',
  tags: ['Tag1', 'Tag2'],
  url: 'https://example.com',
  color: '#5b8cff', // accent color for that card
}
```

## Hosting on GitHub Pages

This repo ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys to GitHub Pages automatically on every push to `main`.

### One-time setup

1. Push this project to a new GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or run the workflow manually from the **Actions** tab).

The workflow automatically sets the app's base path to `/<repo-name>/`, which is what GitHub Pages project sites require. After the first successful run, your site will be live at:

```
https://<your-username>.github.io/<repo-name>/
```

### Manual deploy (alternative)

If you'd rather not use Actions, you can build locally and push the `dist/` folder to a `gh-pages` branch using the `gh-pages` npm package:

```bash
npm install -D gh-pages
npx vite build --base=/<repo-name>/
npx gh-pages -d dist
```

Then point Pages at the `gh-pages` branch in **Settings → Pages**.

### Using a custom domain instead

If you host on a custom domain (not a `username.github.io/repo` path), set the base path back to root before building:

```bash
VITE_BASE_PATH=/ npm run build
```

and add a `CNAME` file containing your domain inside the `public/` folder so it's copied into every build.

## Project structure

```
src/
  components/   # one file per section (Navbar, Hero, Stats, Services, ...)
  data/         # content.js — all copy and structured content
  styles/       # globals.css (tokens, base styles) + sections.css (per-section styles)
  utils/        # GSAP scroll-reveal hook, color/rating helpers
```
