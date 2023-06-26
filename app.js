var unfollowEveryone = require("github-unfollow-everyone");

unfollowEveryone("<Khasanmeliev>", "<khasan200817>", function (error) {
  if (error) {
    console.log("oops. an error occurred:", error);
    return;
  }
  console.log("done.");
});
