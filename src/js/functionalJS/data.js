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
    children: [
      {
        kind: "t3",
        data: {
          title: "class components",
          url: "http://class...",
          author: "author xxx",
        },
      },
      {
        kind: "t4",
        data: {
          title: "hooks components",
          url: "http://hooks...",
          author: "author xxx hooks",
        },
      },
    ],
  },
};

exports.apressBooks = apressBooks;
exports.subRedditPosts = subRedditPosts;
