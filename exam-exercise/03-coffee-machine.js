function coffeeMachine(input) {

    let drinktype = input[0];
    let sugar = input[1];
    let drinksCount = Number(input[2]);

    let sum = 0;
    
    switch (drinktype) {
        case "Espresso":
            if (sugar === "Without") {
                sum = (drinksCount * 0.90) * 0.65;
            } else if (sugar === "Normal") {
                sum = (drinksCount * 1.00) 
            } else if (sugar === "Extra") {
                sum = (drinksCount * 1.20) 
            }
            if (drinksCount >= 5) {
                sum = sum * 0.75;
            }
            break;

        case "Cappuccino":
            if (sugar === "Without") {
                sum = (drinksCount * 1.00) * 0.65;
            } else if (sugar === "Normal") {
                sum = (drinksCount * 1.20) 
            } else if (sugar === "Extra") {
                sum = (drinksCount * 1.60) 
            }
            break;

        case "Tea":
            if (sugar === "Without") {
                sum = (drinksCount * 0.50) * 0.65;
            } else if (sugar === "Normal") {
                sum = (drinksCount * 0.60) 
            } else if (sugar === "Extra") {
                sum = (drinksCount * 0.70) 
            }
            break;
    }
    if (sum > 15) {
        sum = sum * 0.80;
    }
   console.log(`You bought ${drinksCount} cups of ${drinktype} for ${sum.toFixed(2)} lv.`);
}
coffeeMachine(["Cappuccino",
"Normal",
"13"])