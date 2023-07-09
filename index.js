const removeStars = (s) => {
  let output = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      output.pop();
    } else {
      output.push(s[i]);
    }
  }
  return output.join("");
};

console.log(removeStars("leet**cod*e"));
