/**
  冒泡
 */
function bubble(arr) {
  for (let index = 0; index < arr.length - 1; index++) {
    for (let j = 1; j < arr.length - index; j++) {
      const element = arr[j - 1];
      const item = arr[j];
      if (element > item) {
        arr[j - 1] = item;
        arr[j] = element;
      }
    }
  }
}

/**
  选择一个基准元素并把该元素挖出赋值给stick，
  从数组末尾寻找比基准元素小的并挖出填上个坑，左侧下标+1
  然后从数组开头寻找比基准元素大的并挖出填上个坑，右侧下标-1
  然后分别对小于基准部分和大于基准部分进行递归
 */
function quickSort(arr, left, right) {
  if (left > right) {
    return;
  }
  let i = left;
  let j = right;
  const stick = arr[left];
  while (i < j) {
    while (j > i && arr[j] >= stick) j--;
    if (j > i) {
      arr[i] = arr[j];
      i++;
    }
    while (i < j && arr[i] <= stick) i++;
    if (i < j) {
      arr[j] = arr[i];
      j--;
    }
  }
  arr[i] = stick;
  quickSort(arr, left, i - 1);
  quickSort(arr, i + 1, right);
}

const arr = [8, 2, 1, 9];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
