function binarySearch(arr, target) {
  let first = 0;
  let last = arr.length - 1;
  let mid;

  while (first <= last) {
    mid = Math.floor((first + last) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }

  return -1;
}

let arr = [1, 3, 5, 7, 9];
let idx;

idx = binarySearch(arr, 7);
if (idx === -1) {
  console.log("탐색 실패 \n");
} else {
  console.log(`타겟 저장 인덱스: ${idx} \n`);
}

idx = binarySearch(arr, 4);
if (idx === -1) {
  console.log("탐색 실패 \n");
} else {
  console.log(`타겟 저장 인덱스: ${idx} \n`);
}
