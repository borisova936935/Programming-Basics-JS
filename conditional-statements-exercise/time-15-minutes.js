function time15Minutes(input) {
    let hours = Number(input[0]);
    let min = Number(input[1]);
    let convertInMin = hours * 60 + min + 15;
    let convertedHours = Math.floor(convertInMin / 60);
    let convertMin = convertInMin % 60;
    if (convertedHours === 24) {
        convertedHours = 0;

    }
    if (convertMin < 10) {
        console.log(`${convertedHours}:0${convertMin}`);
    } else {
        console.log(`${convertedHours}:${convertMin}`);
    }
}
time15Minutes(["1", "46"])
