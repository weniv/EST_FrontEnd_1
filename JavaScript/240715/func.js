function test(){
    // 이렇게 키워드를 넣지 않고 선언하면 전역변수로 선언된다.
    a = 1
}
test()
// 그래서 함수에서 만든 a변수가 사라지지 않고 살아있다~!
console.log(a)
var 변수 = 1// 여기는 전역스코프
function testb(){
    // 여기는 함수스코프
    // var는 함수 스코프 내에서 살아있음 함수가 종료되면 사라진다.
    var b = 1
}
testb()
console.log(b)


// 코드블럭 내에서 변수가 어떻게 사라지고 남아있는지 확인해보자.
{
    const a = 1;
    let b = 2;
    var c = 3;
}
console.log(a);// err
console.log(b);// err
console.log(c);// 3 -> 잘나옵니다 :)

if(true){
    const a = 1;
    let b = 2;
    var c = 3;
}

console.log(a);// err
console.log(b);// err
console.log(c);// 3 -> 잘나옵니다 :)

for (var index = 0; index < 10; index++) {
    console.log(index);
}

console.log(index)// 반복에 사용된 10이나와버린다...

for (let index = 0; index < 5; index++) {
    console.log(index);
}

console.log(index)// 5가 나오지않는다.



// 콜백============================

// 함수 a를 대신 실행해주는 callback함수
// const a = () => {
//     console.log("오");
// }
// const callback = (fn) =>{
//     fn()
// }
// callback(a)

// 함수를 만들어주는 함수
const fnFactory = () =>{
    return () =>{
        console.log("오오")
    }
}

const callback = (fn) =>{
    fn()
}

// callback(fnFactory())

const CreatedFunction = fnFactory()
callback(CreatedFunction)


// 호이스팅============================
// 이렇게 함수선언 앞에 실행해도 호이스팅 때문에 잘 실행됨
sayHi(); // "Hello, lions!"
function sayHi() {
    console.log("Hello, lions!");
}

sayHello()
var sayHello = () => {
    console.log("Hello, lions!");
};


function factorial(n){
    if(n <= 1) {
        return n
    }
    return n * factorial(n-1)
}

/**
factorial(3)을 했을때 동작되는 코드.
----
if(3 <= 1) {
    return 3
}
return 3 * factorial(2)
----
if(2 <= 1) {
    return 2
}
return 2 * factorial(1)

----
if(1 <= 1) {
    return 1
}
return 1
----
 * 
 * 
 * 
 * 
 */

// 피보나치 for문
function fibonacci(n){
    
    let a = 1, b = 0, temp;
    while(n >= 0){
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }


    return b;
}

let sum = 0;
for (let index =0; index<6; index++){
    sum += index;
}

function sum(n){
    if(n <= 1){
        return n
    }
    // 5일경우에는 5 + 4~1까지 더한값
    // 4일경우에는 4 + 3~1까지 더한값
    return n + sum(n-1) 
}