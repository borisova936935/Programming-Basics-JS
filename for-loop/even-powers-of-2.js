function evenPowersOf2(input) {
  let power = input;

  for (let num = 0; num <= power; num += 2) {
      console.log(Math.pow(2,num));
  }
}
evenPowersOf2(["3"]);
