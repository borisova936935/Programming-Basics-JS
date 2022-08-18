function aquarium(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let precentage = Number(input[3]);

    let volume = lenght * width * height;
    let totalVolume = volume * (1 - precentage * 0.01);
    let total = totalVolume * 0.001

    console.log(total)


}
aquarium(["85", "75", "47", "17"])