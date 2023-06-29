  var findRelativeRanks = function (score) {
    let sorted = [...score].sort((a, b) => b - a);
    let medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    let result = sorted.reduce((ranks, point, i) => {
      ranks[point] = medals[i] || `${i + 1}`;
      return ranks;
    }, {});
    return score.map((s) => result[s]);
  };
  console.log(findRelativeRanks([5, 4, 3, 2, 1]));
