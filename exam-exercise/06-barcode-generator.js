function barcodeGenerator(input) {

    let startNum = input[0]
    let endNum = input[1]

    let startA = startNum[0];
    let startB = startNum[1];
    let startC = startNum[2];
    let startD = startNum[3];

    let endA = endNum[0];
    let endB = endNum[1];
    let endC = endNum[2];
    let endD = endNum[3];

    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;

  let res = ""

    for (let a = startA; a <= endA; a++) {
        for (let b = startB; b <= endB; b++) {
            for (let c = startC; c <= endC; c++) {
                for (let d = startD; d <= endD; d++) {

                    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
                        num1 = a;
                        num2 = b;
                        num3 = c;
                        num4 = d;
                        res += "" + num1 + num2 + num3 + num4 + " "
                        
                    }
                }
            }

        }
    }
    console.log(res);
}
barcodeGenerator(["2345",
    "6789"])

