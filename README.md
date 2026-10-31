# Ishani Roy

A responsive, static Telegram landing page using the supplied Ishani Roy design. It includes the profile card, channel statistics, a direct Telegram invitation, and an automatic 10-second redirect with a circular countdown.

## Technologies

Plain HTML, CSS, and JavaScript, with Plus Jakarta Sans from Google Fonts. Netlify publishes the project root without a build step. No dependencies or backend are required.

## Local preview

Serve the root with any static web server, for example `python3 -m http.server 8080`, and open `http://localhost:8080`. The page redirects to Telegram after 10 seconds when JavaScript is enabled. The join link also works without JavaScript.

## Editing

Update content in `index.html`, styles in `styles.css`, and countdown behavior in `script.js`. The CTA link in HTML is the single source for the redirect destination. Channel claims and statistics are the supplied content and are not connected to a live data source.
