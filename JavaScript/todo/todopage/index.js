// 사용자가 수정하고싶은 todo의 수정하기 버튼을 누른다.
// 사용자는 수정하기버튼을 누르고 입력창이 나온다..
// 사용자가 입력창에 수정할 내용을 입력한다.
// 사용자는 확인 버튼을 누른다.
// 사용자가 수정이 완료된 것을 확인한다.


// 수정하기 버튼이 눌리면 prompt를 띄운다.
// 입력을 받는다.
// -> 이미 작성되어있는 todo텍스트가 입력되어있다.
// -> 입력을 받을때 몇 글자이상을 받을지 정해준다.
// -> 공백이면 다시 입력하도록 알려준다.
// -> 취소 버튼을 누르면 수정이 취소되었다고 알려줌.
// 입력 후 확인버튼을 누르면 서버로 데이터를 전송한다.
// 서버에 데이터가 잘 반영되었는지 확인하고 해당 데이터를 화면에 반영한다.



const url = "http://localhost:3000/todos"


const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");
const $form = document.querySelector("form");


// todo ui에는 내용표시, 삭제버튼, 체크, 수정하기
const createTodoUi = (todoData)=>{
    const $li = document.createElement("li");
    const $todoText = document.createElement("span");
    $li.id = todoData.id
    const $delButton = document.createElement("button");
    $delButton.textContent ="삭제하기";
    $delButton.classList.add("delete-btn");

    const $editButton = document.createElement("button");
    $editButton.textContent = "수정하기";
    $editButton.classList.add("edit-btn");
    $editButton.addEventListener("click",()=>{
        const editTodoText = prompt("수정할 todo내용을 입력해주세요:",todoData.todo);
        const minTextLength = 1
        if (editTodoText&&editTodoText.trim().length >= minTextLength) {
            fetch(url+"/"+todoData.id,{
                method:"PATCH",// PUT:내용을 아예 갈아끼울때, PATCH:일부만 수정할때,
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    todo:editTodoText
                })
            }).then((res)=>{
                return res.json()
            }).then((editedTodoData)=>{
                $todoText.textContent = editedTodoData.todo;
            }).catch((err)=>{
                console.error(err);
                alert("전송에 실패했습니다 ㅠㅠ");
            })
        }else if(editTodoText===null){
            alert("수정이 취소 되었습니다.");
        }
        else{
            alert(minTextLength+"글자 이상 입력해야합니다.");
        }
    });

    const $checkBox = document.createElement("input");
    $checkBox.setAttribute("type","checkbox");
    $checkBox.classList.add("edit-checkbox");
    $checkBox.checked = todoData.done

    $todoText.textContent = todoData.todo;
    $ul.appendChild($li);
    $li.appendChild($todoText);
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
        const parentNode = e.target.parentNode;
        const isDelete = await deleteTodo(parentNode.id);
        if (isDelete) {
            parentNode.remove();
        }else{
            alert("잘못된 요청입니다.");
        }
    }
    if ([...e.target.classList].includes("edit-checkbox")) {
        const todoId = e.target.parentNode.id;
        const checked = e.target.checked
        const editedTodo = await editStatus(todoId, checked);
        if ((typeof editedTodo.done) === 'boolean') {
            return;
        }
        e.target.checked = editedTodo.done
    }
})

const editStatus = async function(id, checked){
    try {
        const res = await fetch(`${url}/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                done:checked
            })
        });
        const editedTodo = await res.json();
        return editedTodo;
    } catch (error) {
        
    }
}

