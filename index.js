var deleteDuplicates = function (head) {
  for (let i = 0; i < head.length; i++) {
    if (head[i] === head[i]) {
      console.log(head[i]);
    }
  }
};

console.log(deleteDuplicates([1, 1, 1, 2, 3]));
