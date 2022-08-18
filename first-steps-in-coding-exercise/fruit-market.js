function fruitMarket(input) {
    let priceStrawberries = Number(input[0]);
    let bananasQuantity = Number(input[1]);
    let orangesQauntity = Number(input[2]);
    let raspberriesQantity = Number(input[3]);
    let strawberriesQuantity = Number(input[4]);

    let priceRaspberries = priceStrawberries / 2;
    let priceOranges = priceRaspberries * 0.60;
    let priceBananas = priceRaspberries * 0.20;
    let sum = (priceStrawberries * strawberriesQuantity) +
        (priceBananas * bananasQuantity) + (priceOranges * orangesQauntity) +
        (raspberriesQantity * priceRaspberries);

    console.log(sum.toFixed(2))

}
fruitMarket([48,
    10,
    3.3,
    6.5,
    1.7]);