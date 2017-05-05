'use strict';

const express = require('express');
const app     = express();
const PORT    = 3000;
const fib     = require('./fib');

// implement your fib function and route here!

/*
returns:
{
  nth: index of the number in the sequence (start w 0 ig),
  value: fib.fib(n),
  timestamp: Date.now(),
  elapsed: process.hrtime()
}
*/

app.listen(PORT);

console.log("Listening on port:", PORT);
