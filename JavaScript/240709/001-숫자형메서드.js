// 숫자형 메서드

console.log("---parseInt---"); // Integer 정수
// 문자열 데이터 -> 숫자형
console.log(typeof parseInt("36"));
// 36px
console.log(parseInt("36px"));
console.log(parseInt("12.5px"));
console.log(parseInt("width: 25px")); // NaN(Not a Number)

console.log("---parseFloat---"); // Float 실수
console.log(parseFloat("12.5px"));
console.log(parseFloat("12.5.6px")); // 12.5
console.log(parseFloat("12.345.6px"));

console.log("---isNaN---");
console.log(isNaN(23)); // true
console.log(isNaN(undefined)); // true
console.log(isNaN("2345")); // false
console.log(isNaN("hello")); // true
// isNaN : 자동으로 숫자로 변환해서 확인합니다. undefined는 숫자로 변환하면 NaN가 됩니다.

console.log("---Number.isNaN---");
console.log(Number.isNaN(23)); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN("2345")); // false
console.log(Number.isNaN("hello"));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("hello" * 3));
// Number.isNaN : 형변환X, 숫자형 NaN일 경우에만 true를 반환합니다.

console.log("---toFixed---");
const pi = 3.1415926;
console.log(pi.toFixed(2));
console.log(pi.toFixed(3)); // 반올림
console.log(typeof pi.toFixed(10));
console.log(pi.toFixed());
// 결과는 문자형
