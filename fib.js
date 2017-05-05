function fib(n) {
  let value = 0, a = 0, b = 1;

  while (n >= 0) {
    value = a;
    a += b;
    b = value;

    n--;
  }

  return value;



  // return Math.round((Math.pow(((1 + Math.sqrt(5))/2), n) - Math.pow(((1 - Math.sqrt(5))/2), n))/Math.sqrt(5));
}

module.exports = fib;
