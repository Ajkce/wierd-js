function value() {
  var num1 = 1;
  let num2 = 2;

  console.log(num1, num2);
}
value();
if (5 < 6) {
  var num3 = 3;
  let num4 = 4;
  console.log(num3, num4);
}

console.log("Outside function");
console.log(num4);
