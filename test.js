let r;
function zip(leftArr, rightArr, fn) {
  let r = [];
  for (
    let index = 0;
    index < Math.min(leftArr.length, rightArr.length);
    index++
  ) {
    r.push(fn(leftArr[index], rightArr[index]));
  }
  return r;
}

r = zip([1, 3], [2, 4], (x, y) => x + y);
console.log(r);
