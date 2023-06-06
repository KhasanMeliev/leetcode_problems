async function sleep(millis) {
  return new Promise((delayresolve) => setTimeout(delayresolve, millis));
}

console.log(sleep(200));
