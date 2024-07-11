// switch

/*
switch(표현식){
  case 값1:
    // 값1에 대한 실행 코드
  case 값2:
    // 값2에 대한 실행 코드
  // ...
  default:
    // 모든 Case에 일치하지 않는 경우 실행할 코드
}
*/

let name = "경현";
switch (name) {
  case "경현":
    console.log("관리자입니다");
  case "초롱":
    console.log("매니저입니다");
  case "민서":
    console.log("사용자입니다");
  default:
    console.log("일치하지 않습니다");
}

console.log("--- 요일 정보 ---");
const today = new Date();
// new Date().getDay() -> 요일 정보를 가져올 수 있다
// 0 일요일, 1 월요일, 2 화요일, ..., 6 토요일
console.log("오늘은 : ", today.getDay());

switch (today.getDay()) {
  case 1:
    console.log("워어어어얼");
    break;
  case 2:
    console.log("화아아아아");
    break;
  case 3:
    console.log("수우우");
    break;
  case 4:
    console.log("모옥");
    break;
  case 5:
    console.log("금");
    break;
  case 6:
  case 0:
    console.log("퇼");
    break;
  default:
    console.log("무슨 요일인지 모르겠습니다");
}
