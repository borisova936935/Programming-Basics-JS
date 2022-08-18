function cinemaVoucher(input) {

    let index = 0;
    let voucher = input[index];
    index++;

    let ticketsCount = 0;
    let otherThingsCount = 0;

    let command = input[index];
    index++;

    while (command !== "End") {
        let thing = command;
        let price = 0;

        if (thing.length > 8) {
            price = thing.charCodeAt(0) + thing.charCodeAt(1);
        } else {
            price = thing.charCodeAt(0);
        }

        if(price > voucher){
            break;
        }

        voucher -= price;

        if(thing.length > 8){
            ticketsCount++;
        }else{
            otherThingsCount++;
        }
        command = input[index];
        index++;
    }

    console.log(ticketsCount);
    console.log(otherThingsCount);

}
cinemaVoucher(["1500",
"Avengers: Endgame",
"Bohemian Rhapsody",
"Deadpool 2",
"End"])