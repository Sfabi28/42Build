#!/bin/bash

echo "🚀 Deploying to GitHub Pages..."

# Make sure we're on main branch
git checkout main

# Navigate to frontend and build
echo "📦 Building Angular app..."
cd frontend
ng build --base-href /42Build/ --output-path dist

# Go back to root
cd ..

# Create fresh gh-pages branch
echo "🌿 Creating fresh gh-pages branch..."
git checkout --orphan gh-pages-temp

# Add and commit built files
echo "📁 Adding built files..."
git --work-tree frontend/dist/browser add --all
git --work-tree frontend/dist/browser commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Replace old gh-pages
echo "🔄 Updating gh-pages branch..."
git branch -D gh-pages 2>/dev/null || true
git branch -m gh-pages

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
git push origin gh-pages --force

# Clean up and return to main
echo "🧹 Cleaning up..."
git reset --hard
git clean -fd
git checkout main

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Your site will be available at: https://sfabi28.github.io/42Build/"
echo ""
echo "📝 Note: GitHub Pages may take a few minutes to update"