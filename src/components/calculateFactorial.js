const calculateFactorial = (n) =>
  [...Array(n + 1).keys()].slice(1).reduce((acc, num) => acc * num, 1);