function travelAgency(input) {

    let town = input[0];
    let packageType = input[1];
    let vip = input[2];
    let days = Number(input[3]);

    let price = 0;

    if (town === "Bansko" || town === "Borovets") {
        if (packageType === "withEquipment") {
            price = 100;
            if (vip === "yes") {
                price -= price * 0.10;
            }
        } else if (packageType === "noEquipment") {
            price = 80;
            if (vip === "yes") {
                price -= price * 0.05;
            }
        }
    } else if (town === "Varna" || town === "Burgas") {
        if (packageType === "withBreakfast") {
            price = 130;
            if (vip === "yes") {
                price -= price * 0.12;
            }
        } else if (packageType === "noBreakfast") {
            price = 100;
            if (vip === "yes") {
                price -= price * 0.07;
            }
        }
    }
    
    if (days > 7){
        sum = (days - 1) * price
    }else{
        sum = days * price;
    }
    
    if (days < 1) {
        console.log("Days must be positive number!");

    } else if (town !== "Bansko" && town !== "Borovets" && town !== "Varna"
        && town !== "Burgas" || packageType !== "withEquipment" && packageType
        !== "noEquipment" && packageType !== "withBreakfast" && packageType
        !== "noBreakfast") {
        console.log("Invalid input!");

    } else console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);

}
travelAgency(["Gabrovo",
"noBreakfast",
"no",
"3"])

