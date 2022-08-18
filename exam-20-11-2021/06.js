function exam (input){

    let locations = Number(input[0]);
    let index = 1;
    for(let i = 1; i <= locations; i++) {
        let avrAmount = 0;
        let expectedAmount = Number(input[index]); 
        index++;
        let days = Number(input[index]);
        index++;
        for(let n = 1; n <= days; n++) {
            let kgPerDay = Number(input[index]);
            avrAmount += kgPerDay;
            index++;
            if (n === days) {
                if (((avrAmount / days).toFixed(2)) >= expectedAmount) {
                    console.log(`Good job! Average gold per day: ${(avrAmount / days).toFixed(2)}.`);
                } else if (((avrAmount / days).toFixed(2)) < expectedAmount) {
                    console.log(`You need ${(expectedAmount - ((avrAmount / days).toFixed(2))).toFixed(2)} gold.`)
 
                }
            }
        }  
    }

}
exam(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])