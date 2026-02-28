function countVowels(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
}
