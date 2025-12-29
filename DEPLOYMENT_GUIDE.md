# 🚀 SparseFlow Website Deployment Guide

## What Changed

Your website has been **completely updated** from research-focused language to **execution-focused messaging** that aligns with your 82.93 TFLOPS milestone on LinkedIn and GitHub.

### Key Content Updates

#### ✅ Hero Section - NEW
**Before:**
- "A compiler platform for verified structured sparsity"
- "early-stage compiler platform being developed"

**After:**
- "High-performance compiler and runtime infrastructure for sparse and structured GPU compute"
- "systems-level compiler and runtime platform"
- **NEW:** "Recent work demonstrates sustained, high-efficiency GPU kernel execution on Ampere Tensor Cores"
- **NEW:** Prominent "View on GitHub" button above the fold

#### ✅ Current Status - COMPLETELY REWRITTEN
**Before:**
- Title: "Research & Development Phase"
- Emphasis on "not claiming performance"

**After:**
- Title: "Active Systems Development & Validation"
- "Recent milestones include sustained high-efficiency GPU kernel execution"
- All bullets focus on engineering execution, not research exploration

#### ✅ NEW Section Added: "Why SparseFlow"
Completely new section that clearly states your value proposition as a systems solution.

#### ✅ Technical Scope - Updated
- Changed "CPU-based validation" to "CPU and GPU validation paths"
- Acknowledges your GPU kernel work

#### ✅ "What We Are Not Claiming" - Refined
- Removed "early-stage research and development" language
- Now says "active systems effort"
- More specific about what's not being claimed

#### ✅ Throughout the Site
- Removed ALL "research" language
- Changed "research and engineering" to just "engineering"
- Updated meta tags to remove "early-stage" wording

## Files to Deploy

Your deployment package includes:

```
📦 Deployment Files
├── index.html              ← Updated website (NEW VERSION)
├── maplesilicon.png        ← Company logo (transparent background)
├── sparseflow.png          ← Product logo (transparent background)
└── CNAME                   ← Domain configuration (maplesilicon.co)
```

## Deployment Steps

### Option 1: GitHub Web Interface (Easiest)

1. **Go to your repository:**
   ```
   https://github.com/MapleSilicon/maplesilicon-site
   ```

2. **Delete or move the old assets folder** (if you want to keep it as backup):
   - Rename it to `assets-old/` or delete it

3. **Upload the new files:**
   - Click "Add file" → "Upload files"
   - Drag and drop ALL 4 files:
     - `index.html`
     - `maplesilicon.png`
     - `sparseflow.png`
     - `CNAME`
   - Commit message: "Update to execution-focused website with GPU milestone messaging"
   - Click "Commit changes"

4. **Verify deployment:**
   - Wait 2-3 minutes for GitHub Pages to rebuild
   - Visit https://maplesilicon.co
   - Check that the hero says "High-performance compiler and runtime infrastructure"

### Option 2: Git Command Line

```bash
# Navigate to your local repo
cd /path/to/maplesilicon-site

# Backup current version (optional)
git checkout -b backup-old-version
git push origin backup-old-version
git checkout main

# Remove old assets directory (if exists)
rm -rf assets/

# Copy new files to repo root
cp /path/to/downloaded/index.html .
cp /path/to/downloaded/maplesilicon.png .
cp /path/to/downloaded/sparseflow.png .
cp /path/to/downloaded/CNAME .

# Commit and push
git add .
git commit -m "Update to execution-focused website with GPU milestone messaging"
git push origin main
```

### Option 3: GitHub Desktop

1. Open GitHub Desktop
2. Select your `maplesilicon-site` repository
3. Delete/rename the `assets/` folder if it exists
4. Copy the 4 new files into the repository folder
5. Review changes in GitHub Desktop
6. Commit with message: "Update to execution-focused website"
7. Push to origin

## Verification Checklist

After deploying, verify these changes on https://maplesilicon.co:

- [ ] Hero title says "High-performance compiler and runtime infrastructure"
- [ ] Blue credibility line mentions "Ampere Tensor Cores"
- [ ] GitHub button is visible above the fold
- [ ] Current Status section says "Active Systems Development & Validation"
- [ ] Current Status mentions "sustained high-efficiency GPU kernel execution"
- [ ] "Why SparseFlow" section exists (between The Problem and The SparseFlow Approach)
- [ ] Technical Scope mentions "CPU and GPU validation paths"
- [ ] No instances of "Research & Development Phase"
- [ ] No instances of "early-stage" language
- [ ] Logos display correctly (transparent backgrounds)
- [ ] Animations work (network background, scroll effects)

## What This Achieves

### Before (Old Site)
- ❌ Positioned as research project
- ❌ Buried your biggest achievement (GPU kernels)
- ❌ Defensive language about not claiming performance
- ❌ Academic tone throughout

### After (New Site)
- ✅ Positioned as systems development effort
- ✅ Highlights GPU kernel execution prominently
- ✅ Confident but honest about what you've achieved
- ✅ Engineering-focused tone throughout

### Alignment Achieved
- **LinkedIn:** Execution story (82.93 TFLOPS) ✅
- **GitHub:** Technical proof (verified kernels) ✅
- **Website:** Systems engineering (now matches!) ✅

All three now tell the **same story**.

## Troubleshooting

### Issue: Logos don't display
**Solution:** Make sure `maplesilicon.png` and `sparseflow.png` are in the repository ROOT, not in an `assets/` subfolder.

### Issue: Old content still showing
**Solution:** GitHub Pages takes 2-3 minutes to rebuild. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R).

### Issue: Domain not working
**Solution:** Verify CNAME file contains just: `maplesilicon.co` (no http://, no trailing spaces)

### Issue: Animations not working
**Solution:** This usually means browser cache. Do a hard refresh or open in incognito mode.

## Next Steps After Deployment

1. **Test on mobile devices** - The site is fully responsive
2. **Share the new site** - It's now ready for:
   - IRAP applications
   - Investor discussions
   - Technical collaborators
   - LinkedIn posts
3. **Update any external links** that point to your old content

## Support

If you encounter any issues:
1. Check the GitHub Pages deployment status in your repo settings
2. Verify all 4 files are in the repository root
3. Check browser console for any errors (F12 → Console tab)

---

**Remember:** This website now matches your technical achievements. It's honest, credible, and ready for serious discussions with funders, investors, and collaborators.

Your momentum is real. Your website now reflects it. 🚀
