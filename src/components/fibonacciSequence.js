const fibonacciSequence = (n) =>
  [...Array(n)].reduce((acc) => {
    const last = acc[acc.length - 1];
    const secondLast = acc[acc.length - 2];
    return [...acc, last + secondLast];
  }, [0, 1]).slice(0, n);