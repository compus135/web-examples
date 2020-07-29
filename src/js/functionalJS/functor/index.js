const { MayBe, map } = require("../utils");

const normalData = {
  kind: "Listing",
  data: {
    modhash: "",
    children: [
      {
        kind: "t1",
        data: { url: "http://...111", title: "es111" },
      },
      {
        kind: "t2",
        data: { url: "http://...222", title: "es222" },
      },
      {
        kind: "t3",
        data: { url: "http://...333", title: "es333" },
      },
    ],
  },
};
const emptyData = {
  kind: "t3",
};
const errorData = {
  message: "something went wrong",
  errorCode: 2,
};
let getTopTenSubRedditPosts = (data) => {
  let response;
  try {
    response = data;
  } catch (error) {
    response = errorData;
  }
  return response;
};

let getTopTenSubRedditData = (type) => {
  let response = getTopTenSubRedditPosts(type);
  return MayBe.of(response)
    .map((arr) => arr["data"])
    .map((arr) => arr["children"])
    .map((arr) =>
      map(arr, (x) => ({ title: x["data"].title, url: x["data"].url }))
    );
};

const result = getTopTenSubRedditData(normalData);
const result2 = getTopTenSubRedditData(emptyData);
const result3 = getTopTenSubRedditData(errorData);

console.log(result, result2, result3);
