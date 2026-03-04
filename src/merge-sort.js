export function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const arrHalf = Math.floor(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, arrHalf));
  let rightArr = mergeSort(arr.slice(arrHalf));

  let mergeArr = [];
  let i = 0;
  let j = 0;
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] > rightArr[j]) {
      mergeArr.push(rightArr[j++]);
    } else {
      mergeArr.push(leftArr[i++]);
    }
  }

  if (i < leftArr.length) {
    mergeArr.push(...leftArr.slice(i, leftArr.length));
  } else if (j < rightArr.length) {
    mergeArr.push(...rightArr.slice(j, rightArr.length));
  }
  return mergeArr;
}
