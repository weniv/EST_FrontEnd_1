const url = "http://localhost:3000/todos"


const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");
const $form = document.querySelector("form");


// todo ui에는 내용표시, 삭제버튼, 체크, 수정하기
const createTodoUi = (todoData)=>{
    const $li = document.createElement("li");
    $li.id = todoData.id
    const $delButton = document.createElement("button");
    $delButton.textContent ="삭제하기";
    $delButton.classList.add("delete-btn");

    const $editButton = document.createElement("button");
    $editButton.textContent = "수정하기";

    const $checkBox = document.createElement("input");
    $checkBox.setAttribute("type","checkbox");

    $li.textContent = todoData.todo;
    $ul.appendChild($li);
    $li.appendChild($delButton);
    $li.appendChild($editButton);
    $li.appendChild($checkBox);
}

const getTodos = async ()=>{
    const res = await fetch(url);
    const todoDatas = await res.json();
    return todoDatas
}

// 최초에 화면에 todo를 그려주는 함수
const initTodo = async function(){
    const todoDatas = await getTodos()
    todoDatas.forEach((todoData)=>{
        createTodoUi(todoData);
    });
}
initTodo();

const addTodo = async function(todoTxt){
    try {
        const req = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({todo:todoTxt, done:false})
        })
        const newTodoData = await req.json();
        return newTodoData;
        
    } catch (error) {
        alert("서버에 이상이 있다. 알아서해라.")
    } finally{
        console.log("여기는 실패 성공 상관없이 무조건 실행함 ㅋ")
    }
}

$form.addEventListener("submit",async function(e){
    e.preventDefault();
    const todoTxt = $input.value;
    const newTodoData = await addTodo(todoTxt);
    createTodoUi(newTodoData);
    $input.value = "";
})


// TODO:: 완료하기 기능이랑 todo삭제하기 기능해야됩니다. + 수정하기도 해야됩니다.

const deleteTodo = async (id)=>{
    try {
        const res = await fetch(`http://localhost:3000/todos/${id}`,{
            "method":"DELETE"
        })
        return res.status === 200
    } catch (error) {
           //예외처리 하면 좋음
    }
}

$ul.addEventListener("click", async (e)=>{
    if([...e.target.classList].includes("delete-btn")){
        const parentNode = e.target.parentNode
        const isDelete = await deleteTodo(parentNode.id)
        if (isDelete) {
            parentNode.remove();
        }else{
            alert("잘못된 요청입니다.");
        }
    }
})