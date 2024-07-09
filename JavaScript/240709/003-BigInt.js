// BigInt
// ES2020 도입
// BigInt와 숫자형은 다른 타입

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let bigNum1 = 123456n;
console.log(typeof bigNum1);

// bigint 연산
console.log(5n / 2n); // BigInt 2n
// console.log(5n / 2); // error: BigInt와 숫자형은 연산 불가
console.log(5n / BigInt(2));

// BigInt 변환 시 주의사항
console.log(BigInt("9007199254740992"));
console.log(BigInt("9007199254740993"));
console.log(BigInt("9007199254740994"));
console.log(BigInt("9007199254740995"));
