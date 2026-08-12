#!/usr/bin/env bash
# Builds both templates for a single Vercel deployment:
#   /                          -> Cornerstone Roofing Co. (single-page template)
#   /roofing-siding-template/  -> Ironclad Roofing & Siding (multi-page template)
#
# Vercel project settings should be:
#   Build Command:      npm run build:vercel
#   Output Directory:   dist_vercel
#   (vercel.json in the repo root also declares these, and handles the
#   client-side routing rewrite for the multi-page app.)
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

rm -rf dist_vercel
mkdir -p dist_vercel

echo "==> Building Cornerstone Roofing Co. (root template)"
VITE_BASE=/ npm run build
cp -r dist/. dist_vercel/
rm -rf dist

echo "==> Building Ironclad Roofing & Siding (multi-page template)"
cd roofing-siding-template
npm ci
VITE_BASE=/roofing-siding-template/ npm run build
cd "$ROOT_DIR"
mkdir -p dist_vercel/roofing-siding-template
cp -r roofing-siding-template/dist/. dist_vercel/roofing-siding-template/
rm -rf roofing-siding-template/dist

echo "==> Combined build ready in dist_vercel/"
