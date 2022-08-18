function bestPlayer(input) {

    let index = 0;
    let command = input[index];
    index++;

    let playerName = "";
    let goals = 0

    while (command !== "END") {
        let name = command;
        let goalsCount = Number(input[index]);
        index++;

        if (goalsCount > goals) {
            playerName = name;
            goals = goalsCount;
        }
        if (goalsCount >= 10) {
            break;
        }
        command = input[index];
        index++

    }

    console.log(`${playerName} is the best player!`);
    if (goals >= 3) {
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${goals} goals.`);
    }
}
bestPlayer(["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"])