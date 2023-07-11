var addMinimum = function (word) {
  let count = 0;
  word = word.toString().split("");

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "a") {
      if (word[i + 1] === "b") {
        count += 0;
      }
      if (word[i + 1] == "c") {
        count += 1;
      } else {
        count += 2;
      }
    }
    if (word[i] === "b") {
      if (word[i + 1] === "b") {
        count += 2;
      }
      if (word[i + 1] == "c") {
        count += 0;
      } else {
        count += 1;
      }
    }
    if (word[i] === "c") {
      if (word[i + 1] === "b") {
        count += 1;
      }
      if (word[i + 1] == "c") {
        count += 2;
      } else {
        count += 0;
      }
    }
  }
  if (word.length === 1) {
    count += 2;
  } else {
    if (word[word.length - 1] === "a" || word[0] === "c") {
      count += 2;
    }
    if (word[word.length - 1] === "b" || word[0] === "b") {
      count += 1;
    } else {
      count += 0;
    }
  }
  return count === 0 ? 0 : count;
};

console.log(addMinimum("baaaab"));
