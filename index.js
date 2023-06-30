var capitalizeTitle = function (title) {
  let res = title
    .split(" ")
    .map((i) => {
      return i.length <= 2
        ? i.toLowerCase()
        : i[0].toUpperCase() + i.slice(1).toLowerCase();
    })
    .join(" ");

  return res;
};
console.log(capitalizeTitle("First leTTeR of EACH Word"));
