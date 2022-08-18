function oscarsWeekInTheCinema(input) {

    let movieName = input[0];
    let hallType = input[1];
    let soldTicketsCount = Number(input[2]);

    let price = 0;

    switch (movieName) {
        case "A Star Is Born":
            if (hallType === "normal") {
                price = soldTicketsCount * 7.50;
            } else if (hallType === "luxury") {
                price = soldTicketsCount * 10.50;
            } else if (hallType === "ultra luxury"){
                price = soldTicketsCount * 13.50;
            }
                break;
        case "Bohemian Rhapsody":
            if (hallType === "normal") {
                price = soldTicketsCount * 7.35;
            } else if (hallType === "luxury") {
                price = soldTicketsCount * 9.45;
            } else if (hallType === "ultra luxury"){
                price = soldTicketsCount * 12.75;
            }
                break;
        case "Green Book":
            if (hallType === "normal") {
                price = soldTicketsCount * 8.15;
            } else if (hallType === "luxury") {
                price = soldTicketsCount * 10.25;
            } else if (hallType === "ultra luxury"){
                price = soldTicketsCount * 13.25;
            }
                break;
        case "The Favourite":
            if (hallType === "normal") {
                price = soldTicketsCount * 8.75;
            } else if (hallType === "luxury") {
                price = soldTicketsCount * 11.55;
            } else if (hallType === "ultra luxury"){
                price = soldTicketsCount * 13.95;
            }
                break;
    }

    console.log(`${movieName} -> ${price.toFixed(2)} lv.`);

}
oscarsWeekInTheCinema(["Green Book",
"normal",
"63"])