interface TodoData{
    id:number;
    todo:string;
}

// const todoDatas:TodoData[] = [
//     {
//         id:1,
//         todo:"아침먹기",
//     },
//     {
//         id:2,
//         todo:"점심먹기",
//     },
// ]

const getTodoData = async ():Promise<TodoData[]> =>{
    const res = await fetch("http://localhost:3000/todos");
    const todoDatas:TodoData[] = await res.json();

    return todoDatas
}

const addTodoData = async (todoText:string):Promise<TodoData> =>{
    const newTodo:Partial<TodoData> = {
        todo:todoText
    }
    const res = await fetch("http://localhost:3000/todos",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newTodo)
    })
    const newTodoData = await res.json()
    return newTodoData
}

const addTodoList = async () =>{
    const $todoInput = document.querySelector("#todo-input");
    if($todoInput !==null && $todoInput instanceof HTMLInputElement){
        const todoText = $todoInput.value;
        $todoInput.value = "";
        await addTodoData(todoText);//서버에 todo추가 요청하기
        const newTodoDatas = await getTodoData();// 최싄 todolist받아오기
        todoListRender(newTodoDatas);
    }
    else{
        alert("페이지에 이상이 있습니다.")
    }
}

const $todoInputButton = document.querySelector("#todo-button");
$todoInputButton!.addEventListener("click",addTodoList);

const createTodoLi = (todoData:TodoData):HTMLLIElement=>{
    // Li요소를 리턴해야한다.
    const $todoLi = document.createElement("li");
    const $todoP = document.createElement("p");
    $todoP.innerText = todoData.todo;
    $todoLi.append($todoP);
    return $todoLi
}

// 데이터를 넣어주면 todoList를 만들어주는애
const todoListRender = (todoDatas:TodoData[]):void =>{
    const $todoContainer = document.querySelector("#todo-container");
    $todoContainer!.innerHTML = "";
    todoDatas.forEach((todoData) => {
        const $todoLi = createTodoLi(todoData);
        $todoContainer!.append($todoLi);
    });
}

const init = async () =>{
    const todoDatas = await getTodoData();
    todoListRender(todoDatas);
}
init();