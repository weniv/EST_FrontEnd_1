// Symbol
// ES6

let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1);
console.log(sym2);

let sym3 = Symbol("name");
let sym4 = Symbol("name");
console.log(sym3 === sym4);

const passwordSymbol = Symbol("password");
const licat = {
  name: "라이캣",
  [passwordSymbol]: "#0000",
  name: "라이캣2",
};
console.log(licat);
