function foodDelivery(input) {

    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let vegMenuCount = Number(input[2]);
    let delivery = 2.50;

    let sum = (chickenMenuCount * 10.35) + (fishMenuCount * 12.40) + (vegMenuCount * 8.15);
    let dessert = sum * 0.20;

    let finalsum = sum + dessert + delivery

    console.log(finalsum);

}
foodDelivery(["2 ",
    "4 ",
    "3 "])