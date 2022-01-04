function recursive(num) {
  if (num <= 0) {
    return;
  }
  console.log(`Recursive call! ${num} \n`);
  recursive(num - 1);
}

recursive(3);
