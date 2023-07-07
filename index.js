var addTwoPromises = async function (promise1, promise2) {
  const [val1, val2] = await Promise.all([promise1, promise2]);
  return val1 + val2;
};
console.log(
  addTwoPromises(
    new Promise((resolve) => setTimeout(() => resolve(10), 50)),
    new Promise((resolve) => setTimeout(() => resolve(-12), 30))
  )
);
