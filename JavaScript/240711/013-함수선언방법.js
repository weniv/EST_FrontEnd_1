// 함수를 선언하는 방법

// 1. 함수 선언식
console.log("--- 함수 선언식 ---");
func1();
function func1() {
  console.log("함수 선언식");
}

console.log("--- 함수 표현식 ---");
// 함수 -> 자바스크립트 값
// 함수 표현식은 호이스팅 때문에 선언 전에 사용할 수 없다
//func2();
var func2 = function func3() {
  console.log("함수 표현식");
  // func3()
};
func2();

// 화살표 함수
console.log("--- 화살표 함수 ---");
function sum1(a, b) {
  return a + b;
}

// 함수 표현식으로 작성한다
const arrowFunc = (a) => 2 * a;
console.log(arrowFunc(10));

// 메서드에서 콜백함수
// 함수의 인자로 다른 함수를 전달한다
[1, 2, 3, 4, 5].map(function (item, index) {
  return item + index;
});

const result = [1, 2, 3, 4, 5].map((item, index) => item + index);
console.log(result);

console.log("--- 즉시실행함수 ---");
(function iife() {
  console.log("함수를 바로 실행합니다.");
})();

const iifeFunc = (function () {
  console.log("표현식으로 작성한 즉시 실행함수");
  let value = 0;

  return {
    increment: function () {
      value++;
    },
    print: function () {
      console.log(value);
    },
  };
})();
console.log(iifeFunc);
iifeFunc.increment();
iifeFunc.print();

// 단축평가를 이용한 반환값
function test() {
  return null || "b";
}
console.log(test());
