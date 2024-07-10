// ES2020에 도입된 연산

console.log("--- nullish (??) ---");
// or 비슷한 기능 -> 첫번째로 오는 true
// ?? nullish -> 첫번쨰로 오는 undefined이나 null이 아닌 값
console.log(null ?? null ?? null);
console.log(null ?? null ?? undefined);
console.log(null ?? "" ?? undefined);

const a = null;
const b = 23;
console.log(a ?? b); // 23
console.log(b ?? a); // 23

// let name = window.prompt("이름을 입력해주세요");
// name = name ?? "사용자";
// console.log("이름: ", name);

console.log("--- 옵셔널 체이닝 (?.) ---");
let user = {
  name: "경현",
  address: {
    city: "jeju",
  },
  number: {
    location: "Seoul",
  },
  sayHello() {
    console.log("Hello world");
  },
};
console.log(user.number); // undefined
// console.log(user.number.location);
console.log(user && user.number && user.number.location);

console.log(user?.number?.location);
console.log(user.sayHello?.());

// 옵셔널과 널리쉬를 함께 사용
console.log("--- 옵셔널 & 널리쉬 ---");
console.log(user?.number?.location ?? "Jeju");
