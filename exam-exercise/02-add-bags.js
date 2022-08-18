function addBags(input) {

    let over20kgPrice = Number(input[0]);
    let weigth = Number(input[1]);
    let daysToTrip = Number(input[2]);
    let bagsCount = Number(input[3]);
    let price = 0;

    if (weigth < 10) {
        price = over20kgPrice * 0.20
    } else if (weigth >= 10 && weigth <= 20) {
        price = over20kgPrice * 0.50;
    }else {
        price = over20kgPrice;
    }

    if (daysToTrip > 30) {
        price = price + (price * 0.10);
    } else if (daysToTrip >= 7 && daysToTrip <= 30) {
        price = price + (price * 0.15);
    } else if (daysToTrip < 7) {
        price = price + (price * 0.40);
    }

let finalPrice = price * bagsCount;
console.log(`The total price of bags is: ${finalPrice.toFixed(2)} lv. `);

}
addBags(["63.80", "23", "3", "1"])