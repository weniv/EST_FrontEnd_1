// 객체
const obj = {
  name: "경현",
  company: "위니브",
  "co-worker": ["라이캣", "웨이드"],
  sayHello() {
    console.log("Hello world!");
  },
};

// 프로퍼티
console.log(obj["name"]); // 대괄호 안에 문자열로 키를 전달
console.log(obj["company"]);
console.log(obj.name); // key값이 변수명 작성 규칙 만족할때만 가능

console.log(obj["company"]);
console.log(obj["co-worker"]);
console.log(obj.company);
// console.log(obj.co - worker); // 변수명 작성 규칙을 만족하지 않아서 오류
console.log(obj.co); // undefined

// 메서드
obj["sayHello"]();
obj.sayHello();

const names = "name";
console.log(obj[names]);

// 프로퍼티 변경
obj["name"] = "하티";
console.log(obj);

// 프로퍼티 추가
obj["job"] = "FE";
console.log(obj);

// 프로퍼티 삭제
delete obj["job"];
console.log(obj);

// 키 말고 값으로도 삭제할수도 있나요?
// -> 프로퍼티를 모두 돌면서 (1) 값이 일치할때 (2) 키를 삭제한다

// 프로퍼티 값이 있는지 확인
// includes랑 비슷한 역할
console.log("company" in obj);
console.log("job" in obj);
