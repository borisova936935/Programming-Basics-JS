function charity(input) {
    let cakesPerDay = Number(input[2] * 45);
    let wafflesPerDay = Number(input[3] * 5.80);
    let pancakesPerDay = Number(input[4] * 3.20);
    let amountPerDay = (cakesPerDay + wafflesPerDay + pancakesPerDay) * Number(input[1]);
    let wholeAmount = amountPerDay * Number(input[0]);
    let finalAmount = wholeAmount - (wholeAmount / Number(input[1]))
    console.log(finalAmount)
}
charity(["23", "8", "14", "30", "16"]);