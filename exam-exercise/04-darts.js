function darts(input) {

    let index = 0;
    let name = input[index];
    index++;
    let command = input[index];
    index++;

    let startPoints = 301;
    let attempts = 0;
    let failedAttempts = 0;

    while (command !== "Retire") {
        let sector = command;
        let points = Number(input[index]);
        index++;

        switch (sector) {
            case "Single": startPoints -= points * 3; break;
            case "Double": startPoints -= points * 2; break;
            case "Triple": startPoints -= points; break;
        }
        

        command = input[index];
        index++;
        points = Number(input[index]);
        index++;
    }

    console.log(startPoints);
}
darts(["Michael van Gerwen",
    "Triple",
    "20",
    "Triple",
    "19",
    "Double",
    "10",
    "Single",
    "3",
    "Single",
    "1",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20"])