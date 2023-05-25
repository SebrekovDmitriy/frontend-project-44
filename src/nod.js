function nod(number1, number2) {
  for (let i = 0; i < 2; i++) {
    while (number1 && number2) {
      number1 > number2 ? (number1 %= number2) : (number2 %= number1);
    }
    number1 += number2;
  }
  return number1;
}
export default nod;
