// undefined

let a;
console.log(a);
console.log(typeof a);

// if (b) {
//   console.log("b입니다");
// }

console.log(`typeof b ${typeof b}`);
console.log(`type(typeof b) ${typeof typeof b}`);

if (typeof b === "undefined") {
  console.log("b는 선언되지 않았습니다");
}

//혹시 "undefined"와 undefined는 다른가요?
console.log(typeof "undefined"); // 문자열
console.log(typeof undefined); // undefined
