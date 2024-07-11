// 이중 반복문

// 구구단
console.log("--- 구구단 ---");
for (let i = 2; i <= 9; i++) {
  console.log(`\n--- ${i}단 ---`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 2차원 배열
console.log("--- 배열 ---");
const arr = [
  [1, 2, 3],
  [4, 5],
];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
