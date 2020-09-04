const apressBooks = [
  {
    id: 111,
    title: "C# 6.0",
    author: "ANDREW TROELSEN",
    rating: [4.7],
    reviews: [{ good: 4, excellent: 12 }],
  },
  {
    id: 222,
    title: "Efficient Learning Machines",
    author: "Rahul Khanna",
    rating: [4.5],
    reviews: [],
  },
  {
    id: 333,
    title: "Pro AngularJS",
    author: "Adam Freeman",
    rating: [4.0],
    reviews: [],
  },
  {
    id: 444,
    title: "Pro ASP.NET",
    author: "Adam Freeman",
    rating: [4.2],
    reviews: [{ good: 14, excellent: 12 }],
  },
];

const subRedditPosts = {
  kind: "listing",
  data: {
    modhash: "",
    after: "t3_terth",
    befor: null,
    children: [
      {
        kind: "t3",
        data: {
          title: "class components",
          url: "http://class...",
          author: "author xxx",
          permalink: "/r/compsci....",
        },
      },
      {
        kind: "t4",
        data: {
          title: "hooks components",
          url: "http://hooks...",
          author: "author xxx hooks",
          permalink: "/r/compsci....",
        },
      },
    ],
  },
};

const subRedditPostsError = {
  message: "something went wrong",
  errorCode: 402,
};

let apressBooks2 = [
  {
    name: "beginners",
    bookDetails: [
      {
        id: 111,
        title: "C# 6.0",
        author: "ANDREW TROELSEN",
        rating: [4.7],
        reviews: [{ good: 4, excellent: 12 }],
      },
      {
        id: 222,
        title: "Efficient Learning Machines",
        author: "Rahul Khanna",
        rating: [4.5],
        reviews: [],
      },
    ],
  },
  {
    name: "pro",
    bookDetails: [
      {
        id: 333,
        title: "Pro AngularJS",
        author: "Adam Freeman",
        rating: [4.0],
        reviews: [],
      },
      {
        id: 444,
        title: "Pro ASP.NET",
        author: "Adam Freeman",
        rating: [4.2],
        reviews: [{ good: 14, excellent: 12 }],
      },
    ],
  },
];

exports.apressBooks = apressBooks;
exports.apressBooks2 = apressBooks2;
exports.subRedditPosts = subRedditPosts;
exports.subRedditPostsError = subRedditPostsError;
