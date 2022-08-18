function club(input) {

    let index = 0;
    let target = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let name = Number(command.length);

    let sum = 0;

    while (command !== "Party!") {
        let price = name;
        let count = Number(input[index]);

        sum += price * count;

     
        command = input[index];
        index++;
        count = Number(input[index]);
        index++;
    }

 

}
club(["500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!"])