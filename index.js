var maximumNumberOfStringPairs = function(words) {
  const len = words.length
  const s = words.map((w) => w.split("").sort().join(""));
  return len - new Set(s).size
};