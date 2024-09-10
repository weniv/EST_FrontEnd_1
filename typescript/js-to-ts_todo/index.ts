interface TodoData{
    id:number;
    todo:string;
}

const todoDatas:TodoData[] = [
    {
        id:1,
        todo:"아침먹기",
    },
    {
        id:2,
        todo:"점심먹기",
    },
]

const addTodoData = (todoText:string):TodoData[] =>{
    const newTodoId = todoDatas[todoDatas.length-1].id + 1
    const newTodo:TodoData = {
        id:newTodoId,
        todo:todoText
    }
    todoDatas.push(newTodo);
    return todoDatas
}

const addTodoList = ():void =>{
    const $todoInput = document.querySelector("#todo-input");
    if($todoInput !==null && $todoInput instanceof HTMLInputElement){
        const todoText = $todoInput.value;
        $todoInput.value = "";
        const todoDatas = addTodoData(todoText);
        todoListRender(todoDatas);
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

todoListRender(todoDatas);