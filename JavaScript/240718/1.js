
// 이벤트 객체 확인하기
// const btnFirst = document.querySelector('.btn-first');

// // 이벤트가 실행될때 event객체를 넣어준다.
// btnFirst.addEventListener('click', (event) => {
//     console.log(event);
// });

// 이벤트 버블링, 캡쳐링 확인하기

// const parent = document.querySelector('.parent');
// const btnFirst = document.querySelector('.btn');

// btnFirst.addEventListener('click', (event) => {
//     console.log("btn capture!");
// },true);

// window.addEventListener('click', () => {
//     console.log("window capture!");
// }, true); // true : 캡처링 단계의 이벤트가 발생하도록 합니다.

// document.addEventListener('click', () => {
//     console.log("document capture!");
// }, true);

// parent.addEventListener('click', () => {
//     console.log("parent capture!");
// }, true);

// btnFirst.addEventListener('click', (event) => {
//     console.log("btn bubble!");
// })

// parent.addEventListener('click', () => {
//     console.log("parent bubble!");
// },true);

// document.addEventListener('click', () => {
//     console.log("document bubble!");
// });

// window.addEventListener('click', () => {
//     console.log("window bubble!");
// });



// target과 currentTarget 확인하기
// const parent = document.querySelector('.parent');
// const btnFirst = document.querySelector('.btn');

// window.addEventListener('click', (event) => {
//     console.log(event.target,"target");
//     console.log(event.currentTarget,"currentTarget");
// });

// 겹치는 여러이벤트에서 target확인하기
// const parent = document.querySelector('.parent');
// const btnFirst = document.querySelector('.btn');

// btnFirst.addEventListener('click', (event) => {
//         console.log(event.target,"target");
//         console.log(event.currentTarget,"currentTarget");
// },true);



// window.addEventListener('click', (event)=>{
//     console.log(event.target,"target");
//     console.log(event.currentTarget,"currentTarget");
// }, true); // true : 캡처링 단계의 이벤트가 발생하도록 합니다.



// document.addEventListener('click', (event) => {
//     console.log(event.target,"target");
//     console.log(event.currentTarget,"currentTarget");
// }, true);



// parent.addEventListener('click', (event) => {
//     console.log(event.target,"target");
//     console.log(event.currentTarget,"currentTarget");
// }, true);



// const btn = document.querySelector('.btn');
// const btn1 = document.querySelector('.btn1');
// const btn2 = document.querySelector('.btn2');

// btn.addEventListener('click', (event) => {
//     event.target.textContent = "버튼4";
// });

// btn1.addEventListener('click', (event) => {
//     event.target.textContent = "버튼4";
// });
// btn2.addEventListener('click', (event) => {
//     event.target.textContent = "버튼4";
// });


// 이벤트 위임
// const parent = document.querySelector('.parent');
// parent.addEventListener("click",(event)=>{
//     console.log(event.target)
//     if(event.target.nodeName === "BUTTON"){
//         event.target.textContent = "버튼4";
//     }
// })


// 이벤트에서 this
const parent = document.querySelector('.parent');

parent.addEventListener('click', function(event){
    console.log(this, "function키워드 사용했을때 this");
    console.log(event.currentTarget, "function키워드 사용했을때 currrentTarget");
    console.log(event.target, "function키워드 사용했을때 target");
})

// 이 경우 화살표 함수로 이벤트를 사용하면 this가 window를 가르킨다.
parent.addEventListener('click', (event)=>{
    console.log(this, "arrow function사용 this");
    console.log(event.currentTarget, "arrow function사용 currrentTarget");
    console.log(event.target, "arrow function사용 target");
})

const myObj = {
    name: 'jaehyun',
    walk() {
        parent.addEventListener('click', () => {
            console.log(this)//화살표 함수로하면 this가 myObj를 가르킨다.
            console.log(this.name + ' is walking');
        })
    }
}
myObj.walk();