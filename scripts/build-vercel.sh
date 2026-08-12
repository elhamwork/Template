#!/usr/bin/env bash
# Builds the multi-page "Ironclad Roofing & Siding" template as the site
# served at the Vercel deployment's root — real separate pages for
# Home/About/Services/Portfolio/Contact via React Router, not a single
# scrolling page.
#
# Vercel project settings should be:
#   Build Command:      npm run build:vercel
#   Output Directory:   dist_vercel
#   (vercel.json in the repo root also declares these, plus a catch-all
#   rewrite to index.html so client-side routes resolve on refresh/deep-link.)
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

rm -rf dist_vercel

echo "==> Building Ironclad Roofing & Siding (multi-page template)"
cd roofing-siding-template
npm ci
VITE_BASE=/ npm run build
cd "$ROOT_DIR"
mv roofing-siding-template/dist dist_vercel

echo "==> Build ready in dist_vercel/"
