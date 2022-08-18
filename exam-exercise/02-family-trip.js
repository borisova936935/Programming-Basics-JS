function familyTrip(input) {

    let budget = Number(input[0]);
    let nightsCount = Number(input[1]);
    let oneNightPrice = Number(input[2]);
    let precentForOtherThings = Number(input[3]);
    let precent = precentForOtherThings / 100

    if (nightsCount > 7) {
        oneNightPrice = oneNightPrice * 0.95
    }
    
    let price = nightsCount * oneNightPrice;
    let neededMoney = price + (budget * precent);
    let diff = Math.abs(budget - neededMoney)

    if (neededMoney <= budget) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else{
        console.log(`${diff.toFixed(2)} leva needed.`);
    }
}
familyTrip(["500",
"7",
"66",
"15"])