function exam(input) {

    let dancersCount = Number(input[0]);
    let scoreCount = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let totalScore = dancersCount * scoreCount;

    let money = 0;

    switch (place) {
        case "Abroad":
            money = totalScore + (totalScore * 0.50)
            if (season === "summer") {
                money -= money * 0.10;
            } else if (season === "winter") {
                money -= money * 0.15;
            }
            break;
        case "Bulgaria":
            money = totalScore
            if (season === "summer") {
                money -= money * 0.05;
            } else if (season === "winter") {
                money -= money * 0.08;
            }
            break;
    }

    let charity = money * 0.75;
    let finalsum = money - charity;
    let moneyPerDancer = finalsum / dancersCount;


    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}
exam(["25",
"98",
"winter",
"Bulgaria"])