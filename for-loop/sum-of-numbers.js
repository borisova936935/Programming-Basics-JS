function sumOfNumbers(input) {
  let sum = 0;
  let text = input[0];
  let inputL = text.length;

  for (let i = 0; i < inputL; i++) {
    let currentNumber = Number(text[i]);
    sum += currentNumber;
  }
  console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"]);
