// 반복문 퀴즈

// 1. 1부터 100까지 짝수의 합을 구하는 반복문 코드
// 1-1) 반복문만 사용
let evenSum1 = 0;
for (let i = 2; i <= 100; i += 2) {
  evenSum1 += i;
}
console.log("짝수의 합:", evenSum1);

let evenSum2 = 0;
for (let i = 1; i <= 100; i++) {
  //if (i % 2 === 0) evenSum2 += i;
  i % 2 === 0 && (evenSum2 += i);
}
console.log("짝수의 합:", evenSum2);

// 2. 반의 평균을 구하는 반복문 코드 (reduce, forEach, for of 사용 X)
const score = [84, 92, 39, 55, 71];
let scoreSum = 0;

for (let i = 0; i < score.length; i++) {
  scoreSum += score[i];
}
console.log("평균값:", +(scoreSum / score.length).toFixed(1));
