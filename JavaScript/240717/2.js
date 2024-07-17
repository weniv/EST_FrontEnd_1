const myBtn = document.querySelector("button");
const myP = document.querySelector("p");
const myInput = document.querySelector("input");

myBtn.addEventListener('click', function(){
    if (2 > myInput.value.length) {
        alert("2글자 이상 입력해라.")
        return;
    }
	myP.textContent += myInput.value;
});

// input 요소에 'input' 이벤트를 연결하면 실시간으로 값이 반영되게 만들 수도 있습니다.
// myInput.addEventListener('input', ()=>{
//   myP.textContent = myInput.value;
// });