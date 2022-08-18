function exam(input) {

    let team = input[0];
    let souveniresType = input[1];
    let count = Number(input[2]);

    let price = 0;

    switch (souveniresType) {
        case "flags":
            if (team === "Argentina") {
                price = count * 3.25;
            } else if (team === "Brazil") {
                price = count * 4.20;
            } else if (team === "Croatia") {
                price = count * 2.75;
            } else if (team === "Denmark") {
                price = count * 3.10;
            }
            break;

        case "caps":
            if (team === "Argentina") {
                price = count * 7.20;
            } else if (team === "Brazil") {
                price = count * 8.50;
            } else if (team === "Croatia") {
                price = count * 6.90;
            } else if (team === "Denmark") {
                price = count * 6.50;
            }
            break;

        case "posters":
            if (team === "Argentina") {
                price = count * 5.10;
            } else if (team === "Brazil") {
                price = count * 5.35;
            } else if (team === "Croatia") {
                price = count * 4.95;
            } else if (team === "Denmark") {
                price = count * 4.80;
            }
            break;

        case "stickers":
            if (team === "Argentina") {
                price = count * 1.25;
            } else if (team === "Brazil") {
                price = count * 1.20;
            } else if (team === "Croatia") {
                price = count * 1.10;
            } else if (team === "Denmark") {
                price = count * 0.90;
            }
            break;
    }

    if (team !== "Argentina" && team !== "Brazil"
        && team !== "Croatia" && team !== "Denmark") {
        console.log("Invalid country!");
    } else if (souveniresType !== "flags" && souveniresType !== "caps"
        && souveniresType !== "posters" && souveniresType !== "stickers") {
        console.log("Invalid stock!");
    }else {
        console.log(`Pepi bought ${count} ${souveniresType} of ${team} for ${price.toFixed(2)} lv.`);
    }

}
exam(["Denmark",
"caps",
"8"])