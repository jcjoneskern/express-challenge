'use strict';

const express = require('express');
const app     = express();
const PORT    = 3000;
const fib     = require('./fib');

app.get('/', (req, res) => {
  res.send('try localhost:3000/fibonacci/[your number here]');
});

app.get('/fibonacci/:n', (req, res) => {
  const start = process.hrtime();
  const end = process.hrtime(start);

  res.json(
    {
      nth: req.params.n,
      value: fib(req.params.n),
      timestamp: new Date().toISOString(),
      elapsed: end[1]/1000000 + 'ms'
    }
  );

});

app.listen(PORT);

console.log("Listening on port:", PORT);
