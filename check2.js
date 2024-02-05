var ensemble1 = [3, 1, 7, 9];
var ensemble2 = [2, 4, 1, 9, 3];
var sum = 0;

for (let b of ensemble1) {
  const element2 = ensemble2.find((a) => a === b);

  if (!element2) {
    sum += b;
  }
}
for (let a of ensemble2) {
  const element1 = ensemble1.find((b) => b === a);

  if (!element1) {
    sum += a;
  }
}
console.log(sum);
