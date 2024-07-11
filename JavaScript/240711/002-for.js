// 반복문
const weniv_friends = ["licat", "binky", "gary", "soulgom", "mura"];

let text = "<ul>\n";
text += "<li>" + weniv_friends[0] + "</li>\n";
text += "<li>" + weniv_friends[1] + "</li>\n";
text += "<li>" + weniv_friends[2] + "</li>\n";
text += "<li>" + weniv_friends[3] + "</li>\n";
text += "<li>" + weniv_friends[4] + "</li>\n";
text += "</ul>\n";

console.log(text);
// document.body.innerHTML = text;

console.log("--- 반복문 for ---");

/*
for(초기화식 ; 조건식 ; 증감식) {
  // 반복에서 실행할 코드
}
*/

// 0부터 5까지 출력하는 코드를 작성
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

/*
const weniv_friends = ["licat", "binky", "gary", "soulgom", "mura"];

let text = "<ul>\n";
text += "<li>" + weniv_friends[0] + "</li>\n";
text += "<li>" + weniv_friends[1] + "</li>\n";
text += "<li>" + weniv_friends[2] + "</li>\n";
text += "<li>" + weniv_friends[3] + "</li>\n";
text += "<li>" + weniv_friends[4] + "</li>\n";
text += "</ul>\n";

console.log(text);
document.body.innerHTML = text;
*/

let text2 = "<ul>";

// i <= weniv_friends.length - 1
for (let i = 0; i < weniv_friends.length; i++) {
  text2 += "<li>" + weniv_friends[i] + "</li>\n";
}
text2 += "</ul>";

console.log(text2);
document.body.innerHTML = text2;
