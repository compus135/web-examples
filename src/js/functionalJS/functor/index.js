const { MayBe, map } = require("../utils");
const { subRedditPosts, subRedditPostsError } = require("../data");

let searchReddit = (search) => {
  let response;
  try {
    response = subRedditPosts;
  } catch (error) {
    response = subRedditPostsError;
  }
  return response;
};

let getComments = (search) => {
  let response;
  try {
    response = subRedditPosts;
  } catch (error) {
    response = subRedditPostsError;
  }
  return response;
};

let mergeViaMayBe = (searchText) => {
  let redditMayBe = MayBe.of(searchReddit(searchText));
  let ans = redditMayBe
    .map((arr) => arr["data"])
    .map((arr) => arr["children"])
    .map((arr) =>
      map(arr, (x) => ({
        title: x["data"].title,
        permalink: x["data"].permalink,
      }))
    )
    .map((obj) =>
      map(obj, (x) => ({
        title: x.title,
        comments: MayBe.of(getComments(x.permalink)),
      }))
    );
  return ans;
};

let mergeViaJoin = (searchText) => {
  let redditMayBe = MayBe.of(searchReddit(searchText));
  let ans = redditMayBe
    .map((arr) => arr["data"])
    .map((arr) => arr["children"])
    .map((arr) =>
      map(arr, (x) => ({
        title: x["data"].title,
        permalink: x["data"].permalink,
      }))
    )
    .map((obj) =>
      map(obj, (x) => ({
        title: x.title,
        comments: MayBe.of(getComments(x.permalink)).join(),
      }))
    )
    .join();
  return ans;
};

console.log(mergeViaJoin(""));
