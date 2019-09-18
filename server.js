const express = require('express');

const app = express();
const data = require('./public/heroes.json');

app.get('/api/heroes', (req, res) => {
  res.json(data);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);