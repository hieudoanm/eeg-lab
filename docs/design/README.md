# EEG Lab Design

This directory contains HTML design mockups and corresponding screenshots for the EEG Lab application.

## Structure

```
design/
├── html/           # HTML design files (numbered 01-13)
├── images/
│   ├── light/      # lab-light PNG screenshots
│   └── dark/       # lab-dark PNG screenshots
├── screenshot.py   # Python script to generate screenshots
├── screenshot.sh   # Bash script to run screenshot.py with setup
├── pyproject.toml  # Python dependencies (managed with uv)
└── README.md       # This file
```

## HTML Files

The HTML files are numbered sequentially and represent different screens in the application. Each file is captured in **both** themes under its own name: `images/light/<n>-<name>.png` is the `lab-light` capture and `images/dark/<n>-<name>.png` is the `lab-dark` capture.

| #   | HTML File                     | PNG File                      | Description           |
| --- | ----------------------------- | ----------------------------- | --------------------- |
| 01  | 01-landing.html               | 01-landing.png                | Public landing page   |
| 02  | 02-sign-in.html               | 02-sign-in.png                | Sign in page          |
| 03  | 03-dashboard.html             | 03-dashboard.png              | Main dashboard        |
| 04  | 04-studies.html               | 04-studies.png                | Studies list          |
| 05  | 05-study-detail.html          | 05-study-detail.png           | Study detail page     |
| 06  | 06-dataset-detail.html        | 06-dataset-detail.png         | Dataset detail page   |
| 07  | 07-analysis-detail.html       | 07-analysis-detail.png        | Analysis job detail   |
| 08  | 08-analyses.html              | 08-analyses.png               | Analyses list         |
| 09  | 09-settings-organisation.html | 09-settings-organisation.png  | Organisation settings |
| 10  | 10-settings-profile.html      | 10-settings-profile.png       | Profile settings      |
| 11  | 11-states.html                | 11-states.png                 | UI state examples     |
| 12  | 12-components.html            | 12-components.png             | Component showcase    |
| 13  | 13-dataset-upload.html        | 13-dataset-upload.png         | Dataset upload page   |

## Generating Screenshots

This project uses `uv` for Python dependency management.

### Quick start (recommended)

Run the bash script which handles setup and screenshot generation:

```bash
./docs/design/screenshot.sh
```

This will:

1. Install Python dependencies with `uv sync`
2. Install Chromium browser with `playwright install chromium` (if not already installed)
3. Generate screenshots with `screenshot.py`

### Manual steps

If you prefer to run the steps manually:

```bash
cd docs/design
uv sync
uv run playwright install chromium
uv run screenshot.py
```

### What the script does

1. Read all HTML files from `html/` directory
2. For each file, open it in a headless Chromium browser twice — once with the
   `lab-light` theme and once with the `lab-dark` theme selected in `localStorage`
3. Take a full-page screenshot at 1920x1080 resolution for each theme
4. Save them to `images/light/` and `images/dark/` using the HTML file name
   (e.g. `01-landing.html` → `images/light/01-landing.png` and
   `images/dark/01-landing.png`)

### Note

The `.venv` directory and `uv.lock` file are created by `uv` and should not be committed to git (they are already in `.gitignore`).

## Manual screenshots (alternative)

If you prefer to take screenshots manually, open each HTML file in a browser:

```bash
open docs/design/html/01-landing.html
```

Use the theme switcher in the bottom-right corner to toggle between the light and dark themes.

## Design System

The HTML files use:

- **Tailwind CSS v4** for styling (via CDN for standalone HTML)
- **daisyUI v5** for component styling
- Two daisyUI themes — `lab-light` (default) and `lab-dark` — declared per page and
  selectable with the built-in switcher (see below)
- The EEG Lab design tokens from `docs/09-design.md §4`

### Theme switcher

Every page renders a small fixed switcher in the bottom-right corner with **Light**
and **Dark** buttons. The selection is persisted in `localStorage` under the
`lab-theme` key and applied by setting `data-theme` on the root element before the
page paints. With no stored value the page defaults to `lab-light`.

### Colour palette

The full token taxonomy (kebab-case) is shared across the Lab applications. Light
values are shown first; the dark value is the `lab-dark` counterpart.

| Token             | Light     | Dark      | Usage                          |
| ----------------- | --------- | --------- | ------------------------------ |
| `background`      | `#F6F8FB` | `#0B0F14` | Application background         |
| `surface`         | `#FFFFFF` | `#121821` | Cards, tables, dialogs         |
| `surface-muted`   | `#EEF2F7` | `#1A2230` | Secondary surfaces             |
| `surface-raised`  | `#E2E8F0` | `#212B3A` | Menus, popovers, dropdowns     |
| `border`          | `#DCE3EC` | `#263244` | Dividers and outlines          |
| `border-strong`   | `#C3CDD9` | `#35455C` | Emphasised borders             |
| `text-primary`    | `#172033` | `#E6EDF5` | Main text                      |
| `text-secondary`  | `#5B6578` | `#9BA9BC` | Supporting text                |
| `text-muted`      | `#8A94A6` | `#6B7A90` | Disabled / de-emphasised text  |
| `accent`          | `#4059C7` | `#4C8DFF` | Primary actions and links      |
| `accent-hover`    | `#3146A5` | `#6BA1FF` | Accent hover state             |
| `accent-muted`    | `#E8ECFB` | `#1C3355` | Accent tint backgrounds        |
| `success`         | `#18794E` | `#3FB950` | Successful operations          |
| `warning`         | `#986500` | `#D9A441` | Warnings                       |
| `danger`          | `#B42318` | `#F0554D` | Errors and destructive actions |
| `info`            | `#175CD3` | `#58A6FF` | Informational feedback         |
| `neutral-state`   | `#8A94A6` | `#5B6578` | Pending / queued / cancelled   |
| `canvas`          | `#EEF2F7` | `#05080B` | Signal trace canvas background |

### EEG-specific tokens

| Token     | Light     | Dark      | Usage                          |
| --------- | --------- | --------- | ------------------------------ |
| `trace-1` | `#4059C7` | `#4C8DFF` | Channel trace colour 1         |
| `trace-2` | `#175CD3` | `#58A6FF` | Channel trace colour 2         |
| `trace-3` | `#18794E` | `#3FB950` | Channel trace colour 3         |
| `trace-4` | `#986500` | `#D9A441` | Channel trace colour 4         |
| `trace-5` | `#B42318` | `#F0554D` | Channel trace colour 5         |
| `trace-6` | `#7C3AED` | `#B07CFF` | Channel trace colour 6         |

## Updating Design Files

When modifying HTML files:

1. Edit the HTML file in `html/`
2. Regenerate the corresponding light and dark screenshots
3. Commit both the HTML and PNG changes together

The numbering system ensures files are always in the correct order when viewed in a file browser.

## Notes

- HTML files are standalone and can be opened directly in a browser
- Screenshots are taken at 1920x1080 resolution
- The script waits for network idle before capturing to ensure all resources are loaded
- Each screenshot includes the full page height
