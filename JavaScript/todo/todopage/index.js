const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");
const $form = document.querySelector("form");


// todo ui에는 내용표시, 삭제버튼, 체크, 수정하기
const createTodoUi = (todoData)=>{
    const $li = document.createElement("li");
    
    const $delButton = document.createElement("button");
    $delButton.textContent ="삭제하기";

    const $editButton = document.createElement("button");
    $editButton.textContent = "수정하기";

    const $checkBox = document.createElement("input");
    $checkBox.setAttribute("type","checkbox");

    $li.textContent = todoData.todo;
    $ul.appendChild($li);
    $ul.appendChild($delButton);
    $ul.appendChild($editButton);
    $ul.appendChild($checkBox);
}

const fetchTodos = async function(){
    const res = await fetch("http://localhost:3000/todos");
    const json = await res.json();
    json.forEach((todoData)=>{
        createTodoUi(todoData);
    })
}
fetchTodos()

const addTodo = async function(todoTxt){
    try {
        const req = await fetch("http://localhost:3000/todos",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({todo:todoTxt, done:false})
        })
        const newTodoData = await req.json()
        createTodoUi(newTodoData)

    } catch (error) {
        alert("서버에 이상이 있다. 알아서해라.")
    } finally{
        console.log("여기는 실패 성공 상관없이 무조건 실행함 ㅋ")
    }
}



$form.addEventListener("submit",async function(e){
    e.preventDefault();
    const todoTxt = $input.value;
    await addTodo(todoTxt);
    $input.value = "";
})


// TODO:: 완료하기 기능이랑 todo삭제하기 기능해야됩니다. + 수정하기도 해야됩니다.

const deleteTodo = ()=>{

}