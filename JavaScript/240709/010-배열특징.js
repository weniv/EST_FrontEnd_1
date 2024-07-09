// 배열의 특징
console.log("----순서---");
const arr = [10, 20, 30, 40, 50];
console.log(arr[0]);
console.log(arr[4]);
console.log(arr[10]);
console.log(arr[-1]);

// 음수 인덱스 -> at
console.log(arr.at(-2));

console.log("---길이---");
console.log(arr.length);
arr.length = 2;
console.log(arr);
arr.length = 5;
console.log(arr);

// 배열의 요소
const arr2 = [10, 20, "hello"]; // 1차원 배열 => 벡터(vector)
console.log(arr2);

const arr3 = [[10, 20],[30, 40],]; // 2차원 배열 => 행렬(matrix)
console.log('---arr3===',arr3[0][1])

const arr4 = [[[1, 2],[3, 4]],[[5, 6],[7, 8]]]; // 3차원 => 텐서
console.log('---arr4===',arr4[1][0][0]);