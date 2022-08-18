function aluminumJoinery(input) {

    let count = Number(input[0]);
    let type = input[1];
    let delivery = input[2];
    let price = 0;

    switch (type) {
        case "90X130":
            price = count * 110;
            if (count > 60) {
                price -= (price * 0.08);
            } else if (count > 30) {
                price -= (price * 0.05)
            }
            break;
        case "100X150":
            price = count * 140;
            if (count > 80) {
                price -= (price * 0.10)
            } else if (count > 40) {
                price -= (price * 0.06);
            }
            break;
        case "130X180":
            price = count * 190;
            if (count > 50) {
                price -= (price * 0.12);
            } else if (count > 20) {
                price -= (price * 0.07);
            }
            break;
        case "200X300":
            price = count * 250;
            if (count > 50) {
                price -= (price * 0.14);
            } else if (count > 25) {
                price -= (price * 0.09);
            }
            break;
    }

    if (delivery === "With delivery") {
        price += 60;
    }

    if (count < 10) {
        console.log("Invalid order");
    } else if (count >= 100) {
        console.log(`${(price - (price * 0.04)).toFixed(2)} BGN`);
    } else {
        console.log(`${price.toFixed(2)} BGN`);
    }
}
aluminumJoinery(["105",
    "100X150",
    "With delivery"])