function sumSeconds(input) {
    let x1 = Number(input[0]);
    let x2 = Number(input[1]);
    let x3 = Number(input[2]);

    let sumSeconds = x1 + x2 + x3;
    let min = Math.floor(sumSeconds / 60);
    let seconds = sumSeconds % 60;

    if (seconds < 10) {
        console.log(`${min}:0${seconds}`);
    } else {
        console.log(`${min}:${seconds}`);
    }
}
sumSeconds(["50",
    "50",
    "49"])