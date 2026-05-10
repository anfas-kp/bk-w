# Deployment Guide 🚀

This document provides comprehensive instructions for deploying the **Zlaqa AI** (TanStack Start) application to various cloud platforms.

## 🛠 Build Configuration

Before deploying, ensure your environment is set up correctly. The project uses **Vite** and **TanStack Start** with a custom build script that handles asset migration.

- **Build Command:** `npm run build`
- **Output Directory:** `.output` (Standard for TanStack Start) or `dist` (if configured as static).
- **Node Version:** 20.x or higher is recommended.

---

## ☁️ Cloudflare Pages (Recommended)

Since the project includes a `wrangler.jsonc` and uses the `@cloudflare/vite-plugin`, Cloudflare Pages is the most optimized target.

### Step-by-Step Deployment:
1. **Push your code** to a GitHub or GitLab repository.
2. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
3. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
4. Select your repository.
5. **Build Settings:**
   - **Framework Preset:** `None` (or `Vite` if available).
   - **Build command:** `npm run build`
   - **Build output directory:** `dist/client`
6. **Environment Variables:**
   - Add `NODE_VERSION`: `20`
7. Click **Save and Deploy**.

---

## 🚀 Render.com

To deploy on Render, you can use the **Static Site** or **Web Service** (if using SSR features).

### Static Site (Fastest)
1. Create a new **Static Site** on Render.
2. Connect your GitHub repository.
3. **Settings:**
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist/client`
4. Deploy.

### Web Service (For SSR)
This project includes a `render.yaml` for automatic configuration.
1. Connect your repository to Render.
2. Render will detect the `render.yaml` and configure the service automatically.
3. Alternatively, create a new **Web Service** manually:
   - **Runtime:** `Node`
   - **Build Command:** `npm run build`
   - **Start Command:** `node dist/server/index.js`
4. Deploy.

---

## 🔺 Vercel

Vercel is the easiest platform for React and TanStack projects.

1. Import your project into [Vercel](https://vercel.com/new).
2. Vercel should automatically detect **TanStack Start** or **Vite**.
3. **Settings:**
   - **Build Command:** `npm run build`
   - **Output Directory:** `.output/public`
4. Click **Deploy**.

---

## 🛤 Railway

Railway is excellent for full-stack deployments with automatic scaling.

1. Connect your repository to [Railway](https://railway.app/).
2. Railway will automatically detect the `package.json`.
3. **Variables:**
   - Ensure `PORT` is handled by the platform (usually `3000`).
4. **Custom Start Command:**
   - If not detected, set it to: `node dist/server/index.js`
5. Deploy.

---

## 🧪 Local Preview

To test the production build locally before deploying:

```bash
# Build the project
npm run build

# Preview the output
npm run preview
```

---

## 📝 Environment Variables

Ensure the following variables are set in your production dashboard if applicable:

| Variable | Description |
|----------|-------------|
| `NODE_ENV` | `production` |
| `NODE_VERSION` | `20.x` |

---

*Last Updated: May 2026*
