var interpret = function (command) {
  return command.replaceAll(/\(\)/g, "o").replaceAll(/\(al\)/g, "al");
};
console.log(interpret("G()()()()(al)"));
