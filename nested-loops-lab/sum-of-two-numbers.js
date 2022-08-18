function sumOf2Numbers(input) {

    let startIndex = Number(input[0]);
    let endIndex = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let isFound = false;

    for (let x = startIndex; x <= endIndex; x++) {
        for (let y = startIndex; y <= endIndex; y++) {
            counter++
            if (x + y === magicNumber) {
                isFound = true;
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNumber})`);
                break;
            }
        }

        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }

}
sumOf2Numbers(["88",
    "888",
    "2000"])