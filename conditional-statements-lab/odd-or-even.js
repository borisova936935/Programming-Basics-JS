function oddOrEven(input) {
    let num = Number(input[0]);
    let result = num % 2 === 0;
    if (result) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
oddOrEven(["2"])