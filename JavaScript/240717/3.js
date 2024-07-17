const div = document.createElement("div");
const ul = document.createElement("ul");
for (let index = 1; index < 4; index++) {
    const li = document.createElement("li")
    li.innerText = index+"번째"
    li.classList.add("li")
    ul.appendChild(li)
}

div.appendChild(ul)
// 화면에 추가하기전에 찾으면 안나온다! ㅠㅠ
document.querySelector(".li")
// 만들어진 dom에 접근해서 찾을 수 있다.
div.querySelectorAll(".li")

document.body.appendChild(div)

// 화면에 추가하면 찾을 수 있다.
document.querySelector(".li")