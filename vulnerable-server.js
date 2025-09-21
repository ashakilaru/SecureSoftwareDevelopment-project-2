const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const query = req.query.q || '';
  res.send(`
    <html>
      <body>
        <h1>Search</h1>
        <form method="GET" action="/search">
          <input name="q" value="${query}">
          <button type="submit">Search</button>
        </form>
        <div id="results">
          Showing results for: ${query}
        </div>
      </body>
    </html>
  `);
});

app.listen(3000);
