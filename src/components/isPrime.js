export const isPrime = (n) => {
  if (n < 2) return false;
  return [...Array(Math.floor(Math.sqrt(n)) - 1).keys()]
    .map((i) => i + 2)
    .every((i) => n % i !== 0);
};