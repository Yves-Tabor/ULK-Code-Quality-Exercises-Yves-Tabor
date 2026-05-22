export const nestedArraysFlattener = (arr) => {
  const nestingLevel = (arr) =>
    Array.isArray(arr)
      ? 1 + Math.max(0, ...arr.map(nestingLevel))
      : 0;

  console.log(`Nesting level: ${nestingLevel(arr)}`);
  return arr.flat(nestingLevel(arr));
}