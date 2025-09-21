const express = require('express');
const escapeHtml = require('../utils/escapeHtml');
const cookieSession = require('cookie-session');
const crypto = require('crypto');

const app = express();

// CSP middleware
app.use((req, res, next) => {
    const nonce = crypto.randomBytes(16).toString('base64');
    res.setHeader("Content-Security-Policy",
        `default-src 'none'; script-src 'self' 'nonce-${nonce}'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; object-src 'none';`
    );
    res.locals.cspNonce = nonce;
    next();
});

app.use(cookieSession({
  name: 'session',
  secret: 'some secret',
  httpOnly: true,
  secure: true,
  sameSite: 'Lax'
}));

app.get('/search', (req, res) => {
    const query = escapeHtml(req.query.q || '');
    res.send(`
    <html>
      <body>
        <form method="GET" action="/search">
          <input name="q" value="${query}">
        </form>
        <div id="results">Showing results for: ${query}</div>
      </body>
    </html>
    `);
});

app.listen(3001, () => console.log("Fixed server running on port 3001"));
