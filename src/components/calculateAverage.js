export const calculateAverage = (numbers) =>
  numbers.reduce((sum, num) => sum + num, 0) / numbers.length;