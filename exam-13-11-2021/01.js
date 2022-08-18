function exam(input) {

    let paperCount = Number(input[0]);
    let fabricCount = Number(input[1]);
    let glueLiters = Number(input[2]);
    let discountPrecent = Number(input[3]);

    let paperPrice = paperCount * 5.80;
    let fabricPrice = fabricCount * 7.20;
    let gluePrice = glueLiters * 1.20;

    let sum = paperPrice + fabricPrice + gluePrice
    let finalsum = sum - (sum * (discountPrecent / 100));
    console.log(finalsum.toFixed(3));

}
exam(["2",
    "3",
    "2.5",
    "25"])