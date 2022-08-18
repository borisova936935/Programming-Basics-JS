function metricConverter(input) {

    let numToConvert = Number(input[0]);
    let from = input[1];
    let to = input[2];

    let convertNumInMM = 0;
    let result = 0;

    if (from === "m") {
        convertNumInMM = numToConvert * 1000;
    } else if (from === "cm") {
        convertNumInMM = numToConvert * 10;
    } else {
        convertNumInMM = numToConvert;
    }
    if (to === "m") {
        result = convertNumInMM / 1000;
    } else if (to === "cm") {
        result = convertNumInMM / 10;
    } else {
        result = convertNumInMM;
    }
    console.log(result.toFixed(3));
}
metricConverter(["150", "m", "cm"])