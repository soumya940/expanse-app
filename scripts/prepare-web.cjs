const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'www');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const item of ['index.html', 'manifest.webmanifest', 'sw.js', 'favicon.ico', 'assets']) {
  const from = path.join(root, item);
  if (fs.existsSync(from)) fs.cpSync(from, path.join(out, item), { recursive: true });
}
let html = fs.readFileSync(path.join(out, 'index.html'), 'utf8');
// Capacitor's native bridge is bundled for the Android WebView only.
html = html.replace('</body>', '  <script src="native-back.js"></script>\n</body>');
fs.writeFileSync(path.join(out, 'index.html'), html);
console.log('Prepared Pocket web assets in www/');
