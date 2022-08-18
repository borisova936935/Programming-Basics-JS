function accountBallance(input) {

    let ballance = 0;
    let index = 0;
    let command = input[index];
    index++

    while (command !== "NoMoreMoney") {
        let money = Number(command);
        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }

        ballance += money;
        console.log(`Increase: ${money.toFixed(2)}`);

        command = input[index]
        index++
    }
    console.log(`Total: ${ballance.toFixed(2)}`);
}
accountBallance(["120",
    "45.55",
    "-150"])