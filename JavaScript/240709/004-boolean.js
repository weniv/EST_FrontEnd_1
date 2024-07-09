// boolean
// 참과 거짓을 나타냄
// 조건문이나 반복문에서 나타남.
let bool1 = true;
let bool2 = false;

console.log(typeof bool1, typeof bool2);

// Truthy : Boolean으로 타입을 변환했을 때, true가 되는 값
// Falsy: Boolean으로 타입을 변환했을 때, false가 되는 값
// 값을 형변환을 해보면 됩니다. -> 앞에 !!
console.log("---Truthy---");
console.log(`true: ${!!true}`);
console.log(`23: ${!!23}`);
console.log(`'hello': ${!!"hello"}`);
console.log(`배열: ${!![]}`);
console.log(`객체: ${!!{ name: "weniv" }}`);

console.log("---Falsy---");
console.log(`false: ${!!false}`);
console.log(`0 : ${!!0}`); // 0은 falsy, 나머지 숫자는 truthy
console.log(`'' : ${!!""}`);
console.log(`null: ${!!null}`);
console.log(`undefined: ${!!undefined}`);
console.log(`NaN: ${!!NaN}`);
