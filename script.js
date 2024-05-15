
// Exercise 3
{
for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}
}
// Exercise 4.1
{
let xValue = 10;
while (xValue > 0) {
  xValue -= 0.5;
  console.log(xValue);
}
}

// Exercise 4.2
{

let y = 3;
while (y < 100) {
  if (y % 2 !== 0) {
    console.log(y);
  }
  y++;
}
}


// Exercise 4.3
{
let n = 6;
let i = 1;
while (i <= n) {

  console.log(`[${i}]`);;
  i++;
}
}


// Exercise 4.4
{

function sumUptoN(n) {

    let sum = 0;
    let number = 5;

    let i = 1;
    while (i <= number) {
    sum += i;
    i++;
  }
  return sum;
}

console.log(sumUptoN(5));

}

