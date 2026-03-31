# 🎭 Theater Portfolio Website — Setup Instructions

## Files Included

| File | Purpose |
|------|---------|
| `index.html` | Main homepage |
| `play.html` | Individual play detail page |
| `style.css` | All styling (one file for everything) |
| `plays-data.js` | YOUR PLAYS DATA — edit this file |
| `main.js` | Homepage interactions |
| `play-detail.js` | Play detail page logic |

---

## Step 1: Folder Structure

Create this exact folder structure on your computer:

```
theater-portfolio/
│
├── index.html
├── play.html
├── style.css
├── plays-data.js
├── main.js
├── play-detail.js
│
└── assets/
    ├── profile.jpg              ← Your main profile photo (portrait)
    ├── resume.pdf               ← Your downloadable resume
    │
    ├── gallery/
    │   ├── g1.jpg               ← Gallery photos (rename to g1–g6 or more)
    │   ├── g2.jpg
    │   ├── g3.jpg
    │   ├── g4.jpg
    │   ├── g5.jpg
    │   └── g6.jpg
    │
    ├── press/
    │   ├── news1.jpg            ← Newspaper clipping photos
    │   ├── news2.jpg
    │   ├── news3.jpg
    │   ├── cert1.jpg            ← Award/certificate photos
    │   ├── cert2.jpg
    │   └── cert3.jpg
    │
    └── plays/
        ├── play-1/
        │   ├── cover.jpg        ← Main cover image for this play
        │   ├── photo1.jpg       ← Production photographs
        │   ├── photo2.jpg
        │   ├── photo3.jpg
        │   ├── press1.jpg       ← Newspaper clippings for this play
        │   └── press2.jpg
        │
        ├── play-2/
        │   ├── cover.jpg
        │   └── ...
        │
        └── play-3/
            ├── cover.jpg
            └── ...
```

---

## Step 2: Customize Your Personal Details

### In `index.html`, find and replace:
- **"Your Name"** / **"Your Full Name"** → Your actual name (appears in nav, hero, footer)
- **"Theater Artist · Director · Actor"** → Your actual roles
- **"Two decades of breathing life..."** → Your personal intro sentence
- **"Write a compelling two to three sentence introduction..."** → Your biography
- **Stats** (20+ Years, 50+ Productions, etc.) → Your actual numbers
- **Contact details** → Your actual email, phone, city, Instagram handle
- **Awards count, city count** → Your actual stats

### In `index.html` Gallery section:
Update the image paths `assets/gallery/g1.jpg` etc. to match your actual gallery photos.

### In `index.html` Press section:
Update newspaper image paths and the source/caption text for your actual press clippings.

---

## Step 3: Add Your Plays in `plays-data.js`

This is the MOST IMPORTANT file. Open it and for each play:

1. **`id`** — A unique identifier like `"play-1"`, `"play-2"` (no spaces)
2. **`title`** — The name of the play
3. **`year`** — Year of the production
4. **`genre`** — Type of play (e.g., "Tragedy · Classical", "Musical · Comedy")
5. **`language`** — Language of production
6. **`role`** — Your role: Director / Lead Actor / Both
7. **`venue`** — Where it was performed
8. **`shows`** — Number of performances (e.g., "18 Performances")
9. **`playwright`** — Original playwright
10. **`cover`** — Path to cover image: `"assets/plays/play-1/cover.jpg"`
11. **`teaser`** — One-line description (shown on homepage card)
12. **`synopsis`** — Full synopsis (HTML allowed, use `<p>` tags)
13. **`journey`** — Your personal story with this play (HTML allowed)
14. **`cast`** — Array of `{ name: "", role: "" }` objects
15. **`photos`** — Array of image paths for production gallery
16. **`press`** — Array of `{ image: "", source: "", quote: "" }` for reviews
17. **`awards`** — Array of award strings
18. **`accentColor`** — A hex color that suits this play's mood (e.g., `"#c9a84c"` for gold, `"#8b3a3a"` for deep red)

### To add more plays:
Copy one entire `{ id: "play-1", ... }` block, paste it after the last `},` and fill in your details.

---

## Step 4: How Play Pages Work (Automatic!)

When a visitor clicks a play card on the homepage, they are taken to:
```
play.html?id=play-1
```

The `play-detail.js` script reads the `id` from the URL, finds the matching play in `plays-data.js`, and automatically populates:
- The hero image and title
- The meta bar (role, language, venue, shows, playwright)
- Synopsis and personal journey
- Cast & crew grid
- Production photograph gallery (with lightbox)
- Press clippings and quotes
- Awards list
- Previous/Next play navigation

**You never need to create individual HTML pages for each play — everything is automatic!**

---

## Step 5: Image Tips

- **Profile photo**: Portrait orientation (3:4 ratio), minimum 600×800px
- **Cover images**: Landscape (4:3 ratio), minimum 800×600px — use your most dramatic stage photo
- **Gallery photos**: Any orientation, minimum 600px on shorter side
- **Press clippings**: Photograph them clearly with good lighting, crop tightly
- **Certificates**: Scan them or photograph flat — good lighting, no shadows

---

## Step 6: Open in Browser

Simply double-click `index.html` to open it in your browser.

For best results (especially for images), run a local server:
- If you have VS Code: Install **Live Server** extension → right-click `index.html` → "Open with Live Server"
- Or simply upload the entire folder to any web host

---

## Step 7: Hosting Your Website (Free Options)

1. **GitHub Pages** (free, recommended):
   - Create a free account at github.com
   - Upload your folder
   - Enable GitHub Pages in settings
   - Get a free URL like: `yourname.github.io/theater-portfolio`

2. **Netlify** (free, drag & drop):
   - Go to netlify.com
   - Drag your entire folder into the browser
   - Get a free URL instantly

3. **InfinityFree / 000webhost** (free hosting with custom domain)

---

## Customization Quick Reference

| What to change | Where |
|---------------|-------|
| Your name & bio | `index.html` — About section |
| Career timeline | `index.html` — Experience section |
| All play details | `plays-data.js` |
| Gallery photos | `assets/gallery/` + `index.html` paths |
| Press clippings | `assets/press/` + `index.html` |
| Colors/fonts | `style.css` — `:root` variables |
| Social links | `index.html` — Contact section |

---

## Color Customization

In `style.css`, find the `:root` section at the top:

```css
:root {
  --accent: #c9a84c;    /* Gold — change this for a different accent color */
  --bg: #0d0a06;        /* Main dark background */
  --text: #f0ebe2;      /* Main text color */
}
```

Change `--accent` to any color you prefer. Suggestions:
- Deep red: `#9b2335`
- Royal blue: `#1a3a6b`
- Forest green: `#2d5a3d`
- Classic gold: `#c9a84c` (current)

---

**Questions? Issues?** Check that your image paths match exactly — this is the most common issue. File names are case-sensitive on web servers.
