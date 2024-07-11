console.log("--- for break ---");
for (let i = 0; i <= 5; i++) {
  if (i === 3) break;

  console.log(i);
}

console.log("--- while break ---");
let num = 0;
while (num < 11) {
  if (num === 5) break;

  console.log(num);
  num++;
}

console.log("--- for continue ---");
for (let i = 0; i <= 5; i++) {
  if (i === 3) continue;

  console.log(i);
}

console.log("--- while continue ---");
num = 0;
while (num < 11) {
  num++;
  if (num === 5) continue;
  console.log(num);
}

console.log("--- do while continue ---");

num = 0;
do {
  num++;
  if (num === 5) continue;
  console.log(num);
} while (num < 11);
