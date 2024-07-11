// for문 선택적 사용

// for(초기화식;조건식;증감식){}

let i = 0;
for (; i < 5; ) {
  console.log(i);
  i++;
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("---");
for (let i = 0; ; i++) {
  console.log(i);

  // 조건식을 생략 -> 반복문 안에 탈출조건을 작성
  // 조건식을 생략 + 탈출조건이 없는 경우 -> 무한 반복에 빠지게 된다.
  if (i > 10) break;
}
