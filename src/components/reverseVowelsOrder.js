export const reverseVowelsOrder = (string) => {
  const vowels = "aeiouAEIOU";
  const extracted = string.split("").filter((char) => vowels.includes(char)).reverse();
  let index = 0;
  return string
    .split("")
    .map((char) => (vowels.includes(char) ? extracted[index ++] : char))
    .join("");
};