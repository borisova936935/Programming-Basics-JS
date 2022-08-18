function repainting(input) {

    let nylonNeeded = Number(input[0]);
    let paintNeeded = Number(input[1]);
    let thinner = Number(input[2] * 5);
    let hours = Number(input[3]);
    let bags = 0.40
    let nylon = (nylonNeeded + 2) * 1.50;
    let paint = (paintNeeded + (paintNeeded * 0.10)) * 14.50
    let sum = nylon + paint + thinner + bags
    let workersPrice = (sum * 0.30) * hours
    let finalPrice = sum + workersPrice

    console.log(finalPrice);
}
repainting(["10 ",
    "11 ",
    "4",
    "8"])