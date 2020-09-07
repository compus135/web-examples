const { reduce, concatAll, map } = require("../utils/index");
const { apressBooks2 } = require("../data");

function ipFn() {
  const allBooks = apressBooks2.map((e) => e.bookDetails);
  const concatBooks = [];
  allBooks.forEach((e) => concatBooks.push(...e));
  const allPreviews = concatBooks.map((e) => e.reviews);
  const concatPreviews = allPreviews.filter((e) => e.length).map((e) => e[0]);
  return concatPreviews.reduce(
    (acc, e) => [acc[0] + e.good, acc[1] + e.excellent],
    [0, 0]
  );
}

function fpFn() {
  return reduce(
    concatAll(
      map(concatAll(map(apressBooks2, (e) => e.bookDetails)), (e) => e.reviews)
    ),
    (acc, e) => [acc[0] + e.good, acc[1] + e.excellent],
    [0, 0]
  );
}

let r = ipFn();
console.log(r);
