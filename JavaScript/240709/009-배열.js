// 배열 선언
const arr = []; // 빈 배열
const arr2 = [1, 2, 3, 4]; // 요소를 갖는 배열

console.log(arr);
console.log(arr2);

// Array 생성자 함수
const arr3 = new Array(10, 20, 30);
console.log(arr3);

// 생성자함수 주의사항
const arr4 = new Array(5); // 인자가 하나인데 숫자다 -> 길이
console.log(arr4);
console.log(new Array(1));

const arr5 = new Array("a");
console.log(arr5);
