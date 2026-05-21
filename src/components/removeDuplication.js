export const removeDuplication = (items) =>
    [...new Set(items)];
// With filter method
//  items.filter((item, index) => arr.indexOf(item) === index)