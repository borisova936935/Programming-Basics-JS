function exam(input) {

    let index = 0;
    let count = Number(input[index]);
    index++;

    let salesCounter = 0;
    let avgRating = 0

    for (let i = 1; i <= count; i++) {
        let number = input[index];
        index++
        let rating = number[2];
        let possibleSales = number[0] + number[1];
        switch (rating) {
            case "2":avgRating+=2; break;
            case "3":salesCounter += (possibleSales * 0.50); avgRating+=3;break;
            case "4":salesCounter+=(possibleSales*0.70);avgRating+=4;break;
            case "5":salesCounter+=(possibleSales*0.85);avgRating+=5;break;
            case "6":salesCounter+=possibleSales;avgRating+=6;break;
        }
        //console.log(rating);
        //
    }



    console.log(salesCounter);
    //console.log(avgRating);
}
exam(["5",
    "122",
    "156",
    "202",
    "214",
    "185"])