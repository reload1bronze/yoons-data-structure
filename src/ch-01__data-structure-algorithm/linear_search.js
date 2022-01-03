function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let arr = [3, 5, 2, 4, 9];
let idx;

idx = linearSearch(arr, 4);
if (idx === -1) {
  console.log("탐색 실패 \n");
} else {
  console.log(`타겟 저장 인덱스: ${idx} \n`);
}

idx = linearSearch(arr, 7);
if (idx === -1) {
  console.log("탐색 실패 \n");
} else {
  console.log(`타겟 저장 인덱스: ${idx} \n`);
}
