var numJewelsInStones = function (jewels, stones) {
  return stones.split("").filter((letter) => jewels.includes(letter)).length;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
