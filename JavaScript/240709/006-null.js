// null
// 사용자의 로그인 정보
let isLoggedIn = true;
let currentUser = {
  name: "licat",
  level: 3,
};

// 로그아웃
// 로그인되어있음 isLoggedIn 거짓
// currentUser 빈 값
isLoggedIn = false;
currentUser = null; // 개발자가 비어있는 값을 나타내기위해 사용
console.log(typeof currentUser); // null이 object 나오는 것은 오류이다.
console.log(Object.prototype.toString.call(null));
