// Math 객체

// 원주율
console.log(`Math.PI: ${Math.PI}`);

// 숫자를 버림(floor), 반올림(round), 올림(ceil)
console.log(`Math.floor: ${Math.floor(4.7)}`);
console.log(`Math.round: ${Math.round(4.7)}`);
console.log(`Math.round: ${Math.round(4.3)}`);
console.log(`Math.ceil: ${Math.ceil(4.3)}`);

// 정수부만 가져옴
console.log(`Math.trunc: ${Math.trunc(4.7)}`);
console.log(`Math.trunc: ${Math.trunc(-1.5)}`);
console.log(`toFixed: ${(-1.4).toFixed(0)}`); // 반올림

// 제곱과 제곱근
console.log(`Math.pow: ${Math.pow(2, 3)}`);
console.log(`2 ** 3 = ${2 ** 3}`);
console.log(`Math.sqrt: ${Math.sqrt(16)}`);

// 절댓값
console.log(`Math.abs: ${Math.abs(-5)}`);
console.log(`Math.abs: ${Math.abs(4)}`);

// 랜덤숫자
console.log(`Math.random: ${Math.random()}`);
// 0부터 1미만의 랜덤숫자를
// 1부터 10까지
// 0 <= random < 1
// 0 <= random < 10
// 1 <= random < 11
// random -> 1, 1.1, 10.9999
// 버림 1부터 10까지의 랜덤 정수 숫자를 얻을 수 있게
console.log(`1부터 10까지의 랜덤 정수 :${Math.floor(Math.random() * 10 + 1)}`);

// 가장 큰 값 max, 가장 작은 값 min
console.log(`Math.max: ${Math.max(10, 20, 30, 40, 20)}`);
console.log(`Math.min: ${Math.min(10, 20, 30, 40, 20)}`);
