# auroracyber.ca

The Aurora Cybersecurity website, built with Jekyll and hosted on GitHub Pages.

## Editing content

You shouldn't need to touch HTML to change wording:

| To change… | Edit |
|---|---|
| Homepage text (hero, about, team, contact) | `_data/home.yml` |
| The six offering cards | `_data/offerings.yml` |
| Email, booking link, GitHub org, site description | `_config.yml` |
| Colours, fonts, spacing | `assets/css/main.css` (tokens are at the top in `:root`) |

Paragraphs in `_data/home.yml` support Markdown, so `**bold**` and `[links](https://…)` work.

## Previewing locally

```bash
bundle install                 # first time only
bundle exec jekyll serve       # then open http://localhost:4000
```

Restart the server after editing `_config.yml`. Other changes reload on refresh.

## Deploying

Commit and push to the branch GitHub Pages builds from (usually `main`). GitHub rebuilds the site in a minute or two. Check progress under the repo's **Actions** tab.

## Replacing the old site

When moving these files into the existing repo, remove the files from the old design that nothing uses anymore:

- the old layout and include files that these replace (`_layouts/`, `_includes/`)
- the old stylesheet(s)
- `assets/aurora-header.png` and `assets/aurora-footer.png`
- any old theme setting in `_config.yml` (for example a `theme:` or `remote_theme:` line). This site doesn't use a theme.

Keep your `CNAME` file if the repo has one. It's what points auroracyber.ca at GitHub Pages.

## Files

```
_config.yml              site settings and contact details
_data/home.yml           homepage copy
_data/offerings.yml      offering cards
_layouts/default.html    page shell (head, nav, footer)
_includes/               head, nav, footer, brand mark
index.html               homepage sections
assets/css/main.css      styles
assets/js/main.js        starfield, aurora curtain, copy button
assets/images/           favicons, app icons, social share image
favicon.ico              classic favicon for older browsers
brand/                   original logo and icon SVGs (not published)
```

## Brand assets

- `brand/aurora-logo.svg` and `brand/aurora-icon.svg` are the original artwork. They use live text in the Outfit font, so they look right only where Outfit is available.
- `assets/images/aurora-icon.svg` is the same icon with the "a" converted to an outline, so it looks right everywhere.
- `assets/images/og-image.png` (1200×630) is the preview image shown when someone shares a link to the site on LinkedIn, Slack, Teams and similar apps.
