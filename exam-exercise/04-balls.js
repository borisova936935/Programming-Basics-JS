function balls(input) {

    let index = 0;
    let ballsCount = Number(input[index]);
    index++;

    let redPoints = 0;
    let orangePoints = 0;
    let yellowPoints = 0;
    let whitePoints = 0;
    let blackCounter = 0;
    let otherColors = 0;

    let totalPoints = 0

    for (i = 0; i < ballsCount; i++) {

        let color = input[index];
        index++

        if (color === "red") {
            redPoints++;
            totalPoints += 5;
        } else if (color === "orange") {
            orangePoints++;
            totalPoints += 10;
        } else if (color === "yellow") {
            yellowPoints++;
            totalPoints += 15;
        } else if (color === "white") {
            whitePoints++
            totalPoints += 20
        } else if (color === "black") {
            totalPoints /= 2;
            blackCounter++
        }else{
            otherColors++;
        }

    }


    console.log(`Total points: ${Math.floor(totalPoints)}`);
    console.log(`Red balls: ${Math.floor(redPoints)}`);
    console.log(`Orange balls: ${Math.floor(orangePoints)}`);
    console.log(`Yellow balls: ${Math.floor(yellowPoints)}`);
    console.log(`White balls: ${Math.floor(whitePoints)}`);
    console.log(`Other colors picked: ${Math.floor(otherColors)}`);
    console.log(`Divides from black balls: ${Math.floor(blackCounter)}`);
}


balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])