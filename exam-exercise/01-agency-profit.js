function agencyProfit(input) {
    let name = input[0];
    let adultsTicketsCount = Number(input[1]);
    let kidsTicketsCount = Number(input[2]);
    let adultsTicketsPrice = Number(input[3]);
    let kidsTicketsPrice = (adultsTicketsPrice * 0.30);
    let taxPrice = Number(input[4]);
    let fullAdultsTickets = adultsTicketsPrice + taxPrice;
    let fullKidsTickets = kidsTicketsPrice + taxPrice;
    let sum = fullAdultsTickets * adultsTicketsCount + fullKidsTickets * kidsTicketsCount
    let profit = sum * 0.20
    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`);
}
agencyProfit(["WizzAir", "15", "5", "120", "40"])