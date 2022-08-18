function exam(input) {

    let maxA = Number(input[0]);
    let maxB = Number(input[1]);
    let maxC = Number(input[2]);

    let num1 = 0;
    let num2 = 0;
    let num3 = 0;



    for (let a = 2; a <=maxA; a +=2) {
        for (let b = 2; b <= maxB; b++) {
            for (let c = 2; c <= maxC; c+=2) {
                if (b === 2 || b===3 || b === 5 || b === 7) {
                   
                    let num1 = a;
                    let num2 = b;
                    let num3 = c;
                    console.log("" + num1 + " " + num2 + " " + num3);
             
                }

            }
        }

    }

}
exam(["3",
"5",
"5"])