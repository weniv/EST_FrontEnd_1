// 논리 연산
// boolean - true & false

console.log("--- 논리곱 and (&&) ---");
console.log(`true && true: `, true && true);
console.log(`true && false: `, true && false);
console.log(`false && true: `, false && true);
console.log(`false && false: `, false && false);

let age = 20;
console.log(age > 5 && age < 25);
console.log("licat" && "wade");

console.log(age > 5 && false && age < 25);
console.log(age > 5 && "" && age < 25); // 첫번째로 falsy한 값
console.log(age > 5 && age < 25 && "licat"); // 마지막 truthy한 값

let isLoggedIn = true;
const result = isLoggedIn && console.log("Hello User!");
console.log(result);

const user = {
  name: "경현",
  address: {
    city: "jeju",
  },
};
console.log(user.number); // undefined
// console.log(user.number.location);
console.log(user.number && user.number.location);

console.log("\n--- 논리합 or (||) ---");
console.log(`true || true : ${true || true}`);
console.log(`true || false : ${true || false}`);
console.log(`false || true : ${false || true}`);
console.log(`false || false : ${false || false}`);

let age2 = 20;
console.log(age2 < 10 || age2 < 25);
console.log("" || "licat" || NaN || null);
console.log("" || NaN || null);

// let name = window.prompt("이름을 입력해주세요");
// console.log(name);
// name = name || "사용자";
// console.log("이름: ", name);

console.log("--- 논리부정 not (!) ---");
console.log(!true);
console.log(!false);

// 논리부정을 2번 사용해서 boolean 타입으로 변환할 수 있다.
console.log(!!!23);
console.log(!23);
console.log(!!!"");
