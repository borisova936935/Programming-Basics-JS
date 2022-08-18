function num(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let sum = 0;
  let output = "";

  for (let i = start; i <= end; i++) {
    if (i % 9 === 0) {
      sum += i;
      output += `${i} \n`;
    }
  }

  console.log(`The sum: ${sum}`);
  console.log(output);
}
num(["100", "200"]);

//...........................second.way........better.....................

function divisible(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let sum = 0;

  for (let i = start; i <= end; i++) {
    if (i % 9 === 0) {
      sum += i;
    }
  }
  console.log(`The sum: ${sum}`);

  for (let i = start; i <= end; i++) {
    if (i % 9 === 0) {
      console.log(i);
    }
  }
}
divisible(["100", "200"]);
