# Deployment Guide: Net-MD Solutions

## Pre-Deployment Checklist

1. **Static Export Configuration**:
   - Ensure `next.config.ts` includes `output: "export"`.
   - Verify `images.unoptimized = true` if required for static hosting without a Node.js server.
   
2. **Environment Variables**:
   - Verify `.env.production` contains all necessary keys (e.g., analytics).
   
3. **Build Validation**:
   - Run `npm run build` locally to ensure the static export succeeds without errors.
   - Run Lighthouse audits against the `out` directory using a local server (`npx serve@latest out`).
   - Confirm Performance score > 95.

4. **SEO & Metadata**:
   - Check `sitemap.ts` and `robots.ts` configuration.
   - Ensure all pages have proper `<title>` and `<meta name="description">` tags optimized for target keywords.

## Deployment Steps (Vercel)

1. **Connect Repository**:
   - Link the GitHub/GitLab repository to Vercel.
   - Project Name: `net-md-net`
   - Framework Preset: `Next.js`

2. **Configure Settings**:
   - Build Command: `npm run build`
   - Output Directory: `out` (if fully static) or `.next` (if using SSR/ISR).
   - Add Domain: `net-md.net` and `www.net-md.net`.

3. **Deploy & Verify**:
   - Trigger the deployment.
   - Verify SSL provisioning.
   - Test contact forms and interactive UI components in production.
