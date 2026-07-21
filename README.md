# Two Grifters site

Next.js static-export site for pod.twogrifters.com, deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to main.

Do not edit `content/` or the pipeline-owned parts of `public/` by hand. The
podcast production repo generates and pushes them via `bin/episode.sh publish`:

- `content/show.json` and `content/episodes/*.json` come from the pipeline's
  `export_site.py` (show metadata, episode metadata, chapters, sources,
  transcripts).
- `public/feed.xml`, `public/audio/*.mp3`, and `public/art/` (covers, derived
  display and OG sizes) are copied in by `publish.py`.

The app itself (app/, components/, lib/) is show-agnostic: everything it
renders comes from `content/` and `public/`, so pointing a different show's
pipeline at a clone of this repo produces that show's site.

Local development:

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
```
