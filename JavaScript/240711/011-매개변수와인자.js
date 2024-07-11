// 함수의 매개변수와 인자
// num1, num2 -> 매개변수(parameter)
function sum(num1, num2) {
  return num1 + num2;
}
// 2, 3 -> 인자(argument)
sum(2, 3);

// 파선아실 : 파라미터는 선언, 아규먼트 실행

console.log("--- 매개변수와 인자의 특징 ---");
function sumNumbs(a = 10, b = 20, c = 30) {
  console.log(`-- ${a} + ${b} + ${c}`);
  return a + b + c;
}
console.log(sumNumbs(10, 20, 30, 40));
console.log(sumNumbs(10, 20)); // NaN
console.log(sumNumbs(0, undefined, 0)); // undefined -> 기본값
console.log(sumNumbs(null, 0, 0)); // null -> null;
// 값이 전달되지 않았거나, undefined -> 기본값

console.log("--- 원시 call ---");
let number = 10;
function test(num) {
  num = num + 10;
  console.log("function", num);
}
test(number);
console.log(number);

console.log("--- 객체 call ---");
const object = { a: 1, b: 2 };
function test2(obj) {
  obj.c = 3; // 객체가 수정됨
  obj = { name: "hati" }; // 다른 객체를 할당함
  console.log("function", obj);
}
test2(object);
console.log(object);
