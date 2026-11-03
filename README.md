# Diffusion Lab

## Publish on GitHub Pages

Use the contents of `diffusion-lab` as the root of your GitHub repository, including the `.github` folder and `dist` files. The workflow must be at the repository root's `.github/workflows/pages.yml` path.

1. Push this project to the `main` branch of your GitHub repository.
2. In the repository, open **Settings → Pages** and select **GitHub Actions** as the source.
3. Open **Actions → Publish Diffusion Lab → Run workflow**, or push another change to `main`.
4. Once deployment succeeds, the Pages settings and workflow show your site URL, normally `https://USERNAME.github.io/REPOSITORY/`.

The workflow checks the JavaScript and numerical model, then deploys only `dist/`. No build, npm packages, API keys, or hosting JSON file is needed. Relative asset paths support GitHub Pages repository URLs as well as local files. If your default branch is different, change `branches: [main]` in the workflow.

GitHub Pages availability and visibility depend on your repository and account settings. The previous private hosting setup does not carry over.

## Run locally

Open `dist/index.html` directly in a browser. No installation or internet connection is needed. Click inside the semicircle, then press Run. Select continuous or finite pulse before placing each source. Reset restarts all existing sources and replays pulses; Clear removes all sources. The two plots share a linear concentration axis; the heatmap uses a logarithmic scale normalized to the current field maximum.

The 2 mm semicircle, permeable curved interface, perforated impermeable wall, sealed rectangular fluid chamber, and exterior zero far-field approximation are described in the app's Model & numerical assumptions section. Coefficients are in mm²/s. Concentration and source strengths use arbitrary units. Export produces the instantaneous profile and sensor concentrations as CSV.

`dist/solver.js` is independent of the UI and can run in Node for numerical checks. Geometry is rasterized at 25 µm resolution. This exploratory planar model requires spatial and exterior-domain convergence studies before quantitative interpretation as a sphere.
