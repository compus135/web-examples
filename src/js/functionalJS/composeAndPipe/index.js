const utils = require("../utils/index");
const apressBooks = require("../data").apressBooks;

function fn(params) {
  return apressBooks
    .filter((book) => book.rating[0] > 4.5)
    .map((book) => ({ title: book.title, author: book.author }));
}

// const result = fn(apressBooks);
// const result = utils.map(
//   utils.filter(apressBooks, (book) => book.rating[0] > 4.5),
//   (book) => ({ title: book.title, author: book.author })
// );
const filterRatingGoodBooks = (books) =>
  utils.filter(books, (book) => book.rating[0] > 4.5);
const mapTitleAndAuthorOfBooks = (books) =>
  utils.map(books, (book) => ({ title: book.title, author: book.author }));
let result = utils.simpleCompose(
  mapTitleAndAuthorOfBooks,
  filterRatingGoodBooks
)(apressBooks);

//convert number to  float
let data = parseFloat("3.56");
let number = Math.round(data);

//use compose
result = utils.simpleCompose(
  (data) => Math.round(data),
  (data) => parseFloat(data)
)("3.56");
result = utils.simpleCompose(Math.round, parseFloat)("3.56");

let splitIntoSpaces = (str) => str.split(" ");
let count = (array) => array.length;

result = utils.simpleCompose(count, splitIntoSpaces)("z guo r");

const isGoodBook = (book) => book.rating[0] > 4.5;
const titleAndAuthorBook = (book) => ({
  title: book.title,
  author: book.author,
});
const filterGoodBooks2 = utils.partial(utils.filter, undefined, isGoodBook);
const titleAndAuthorBook2 = utils.partial(
  utils.map,
  undefined,
  titleAndAuthorBook
);
result = utils.simpleCompose(
  titleAndAuthorBook2,
  filterGoodBooks2
)(apressBooks);
console.log(result);
