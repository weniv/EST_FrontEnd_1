const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");
const $form = document.querySelector("form");

const fetchTodos = async function(){
    const res = await fetch("http://localhost:3000/todos");
    const json = await res.json();
    json.forEach((item)=>{
        const $li = document.createElement("li");
        $li.textContent = item.todo;
        $ul.appendChild($li);
    })
}
fetchTodos()