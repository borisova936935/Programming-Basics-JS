function multiplicationTable(input) {
  let x = Number(input[0]);

  for (i = 1; i <= 10; i++) {
    console.log(`${i} * ${x} = ${i * x}`);
  }
}
multiplicationTable(["5"]);
