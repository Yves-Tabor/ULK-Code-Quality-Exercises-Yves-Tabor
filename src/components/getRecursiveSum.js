export const sumArray = (arr) =>
  arr.length === 0 ? 0 : arr[0] + sumArray(arr.slice(1));