function swimmingPool(input) {

    let peopleCount = Number(input[0]);
    let taxPrice = Number(input[1]);
    let sunbedPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let totalTaxPrice = peopleCount * taxPrice;
    let totalSunbedPrice = Math.ceil(peopleCount * 0.75) * sunbedPrice;
    let totalUmbrellaPrice = Math.ceil(peopleCount * 0.50) * umbrellaPrice;

    let sum = totalTaxPrice + totalSunbedPrice + totalUmbrellaPrice;
    console.log(`${sum.toFixed(2)} lv.`);
}
swimmingPool(["100",
    "8",
    "6",
    "4"])