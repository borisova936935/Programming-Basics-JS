function renovation(input) {

    let index = 0;
    let height = Number(input[index]);
    index++;
    let width = Number(input[index]);
    index++;
    let nonPainterPrecent = Number(input[index]);
    index++;

    let walls = height * width * 4;
    let paintedWalls = walls - (walls * (nonPainterPrecent / 100));

    let command = input[index];
    index++;

    while (command !== "Tired!") {
        let painted = Number(command);
        paintedWalls -= painted;
        if (paintedWalls < 1) {
            break;
        }
        command = input[index];
        index++;
    }

    if (paintedWalls < 0) {
        console.log(`All walls are painted and you have ${Math.abs(paintedWalls)} l paint left!`);
    }else if (paintedWalls === 0) {
        console.log("All walls are painted! Great job, Pesho!");
        
    } else {
        console.log(`${paintedWalls} quadratic m left.`);
    }

}
renovation(["2",
    "3",
    "25",
    "6",
    "7",
    "8"])