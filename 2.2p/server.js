const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Add two numbers: /add/:x/:y
app.get('/add/:x/:y', (req, res) => {
  const x = parseFloat(req.params.x);
  const y = parseFloat(req.params.y);
  if (isNaN(x) || isNaN(y)) {
    return res.status(400).json({ error: 'Invalid numbers.' });
  }
  res.json({ operation: 'add', x, y, result: x + y });
});

// Subtract: /subtract/:x/:y
app.get('/subtract/:x/:y', (req, res) => {
  const x = parseFloat(req.params.x);
  const y = parseFloat(req.params.y);
  if (isNaN(x) || isNaN(y)) {
    return res.status(400).json({ error: 'Invalid numbers.' });
  }
  res.json({ operation: 'subtract', x, y, result: x - y });
});

// Add two numbers: /add/:x/:y
app.get('/multiply/:x/:y', (req, res) => {
  const x = parseFloat(req.params.x);
  const y = parseFloat(req.params.y);
  if (isNaN(x) || isNaN(y)) {
    return res.status(400).json({ error: 'Invalid numbers.' });
  }
  res.json({ operation: 'multiply', x, y, result: x * y });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
