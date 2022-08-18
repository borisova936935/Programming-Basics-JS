function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothing = Number(input[2]);
    let money = 0;
    let decor = budget * 0.10;
    if (extras > 150) {
        clothing = clothing * 0.90;
    }
    money = decor + (extras * clothing);
    let diff = Math.abs(money - budget)
    if (budget >= money) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }
}
godzillaVsKong(["9587.88",
    "222",
    "55.68"])