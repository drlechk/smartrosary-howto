# SmartRosary How-to Pages

Interactive, multilingual instructional pages for SmartRosary device usage. The pages reuse the SmartRosary mockup assets to explain power, charging, navigation, and praying workflows.

## What is in this repository

- `index.html` - redirect to the first how-to page.
- `howto/010_onoff.html` - power on/off tutorial.
- `howto/011_charging.html` - charging tutorial.
- `howto/020_nav.html` - device navigation tutorial.
- `howto/030_praying.html` - praying tutorial.
- `howto/howto-i18n.js` - shared multilingual tutorial copy.
- `howto/deploy-footer.js` - deploy timestamp footer.
- `smartrosary-mockup.js`, `styles.css`, `asset-data.js`, and `bg/` - mockup UI and visual assets.
- `lang/`, `smartrosary-language-fixtures.js`, and `intentions/` - copied preview fixtures used by static tutorial screens.

## Local development

There is no package install or build step documented. Serve the repository locally:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/howto/010_onoff.html`.

## Deployment

GitHub Pages deployment is configured in `.github/workflows/deploy.yml`. Pushing to `main` deploys the static repository content and injects a deploy timestamp into HTML files during the workflow.

## Fixture refresh notes

- Refresh `lang/*.js` and `smartrosary-language-fixtures.js` from `smartrosary-language` when canonical language strings change.
- Refresh `intentions/*.js` from `smartrosary-intentions` when canonical intention previews change.
- Keep layout checks in mind after copy updates, especially for longer translations in compact tutorial panels.

## Validation

Check each tutorial page in a browser after content, layout, or fixture changes. There is no automated test command documented for this repository.

## License

This repository is licensed under the PolyForm Noncommercial License 1.0.0. See `LICENSE`.
