var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 1;
  let maxEnd = intervals[0][1];
  for (let i = 0; i < intervals.length; i++) {
    let [start, end] = intervals[i];
    if (start >= maxEnd) {
      count++;
      maxEnd = end;
    }
  }
  return intervals.length - count;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);
