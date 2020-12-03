/**
 * 子字符串在指定字符串第{num}次出现的位置
 * @param {*} subString 子字符串
 * @param {*} parentString 父字符串
 * @param {*} num 第几次出现
 */
function subStringIndex(subString, parentString, num) {
  let subStringIndex = -1;
  for (let index = 0; index < num; index++) {
    subStringIndex = parentString.indexOf(subString, subStringIndex + 1);
    if (subStringIndex === -1) return -1;
  }
  return subStringIndex;
}

function request({ requestData, resolveData, rejectData, delay = 1000 }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (resolveData) {
        resolve({ requestData, resolveData });
      } else if (rejectData) {
        reject({ requestData, rejectData });
      }
    }, delay);
  });
}

export { subStringIndex, request };
