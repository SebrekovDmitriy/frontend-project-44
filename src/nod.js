function nod(num1, num2) {
  let number1 = num1;
  let number2 = num2;
  for (let i = 0; i < 2; i += 1) {
    while (number1 && number2) {
      if (number1 > number2) {
        number1 %= number2;
      } else {
        number2 %= number1;
      }
    }
    number1 += number2;
  }
  return number1;
}
export default nod;
