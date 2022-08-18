function specialNumbers(input) {

    let n = Number(input);

    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    let res = "";

    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            for (let c = 1; c < 10; c++) {
                for (let d = 1; d < 10; d++) {
                    if (n % a === 0 && n % b === 0 && n % c === 0 && n % d === 0){
                        num1 = a;
                        num2 = b;
                        num3 = c;
                        num4 = d;
                        res+= "" + num1 + num2 + num3 + num4 + " ";
                    }
                }
            }
        }
    }
console.log(res);
}
specialNumbers(["3"])