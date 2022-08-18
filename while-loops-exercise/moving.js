function moving(input) {

    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;

    let freeSpace = width * length * height;

    let command = input[index];
    index++;

    let isFreeSpace = true; 

    while (command !== "Done") {
        let box = Number(command);
        freeSpace -= box;
        if (freeSpace < 0) {
            isFreeSpace = false;
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++ 
    }
    if (isFreeSpace) {
        console.log(`${Math.abs(freeSpace)} Cubic meters left.`);
    }

}
moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])