// 전개구문 (...)

// 배열의 전개구문
console.log("--- 배열의 전개구문 ---");
const fruits = ["사과", "파인애플", "수박"];
const fish = ["조기", "갈치", "다금바리"];
const food = [...fruits, ...fish];
console.log(food);
console.log(fruits.concat(fish));

const copyFruits = [...fruits];
copyFruits.push("망고");
console.log("fruits", fruits);
console.log("copyFruits", copyFruits);
// 배열의 전개구문을 이용하면 얕은 복사가 가능

console.log("--- 객체의 전개구문 ---");
const weniv1 = { gary: 1, binky: 2 };
const weniv2 = { licat: 3 };
const weniv = { ...weniv1, ...weniv2 };
console.log(weniv);

const me = { name: "weniv", address: "jeju" };
const copyMe = { ...me };
copyMe.number = 1;
console.log("me", me);
console.log("copyMe", copyMe);

// 객체의 전개구문 : key 값이 동일하면 덮어쓰기가 된다.(가장 마지막에 오는 값이 됩니다))
const obj1 = { name: "weniv", address: "jeju" };
const obj2 = { address: "seoul" };
const obj = { ...obj1, ...obj2 };
console.log(obj);
console.log(obj.address);
