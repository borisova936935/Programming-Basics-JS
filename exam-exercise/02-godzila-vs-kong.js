function godzilaVsKong(input){

let budget = Number(input[0]);
let statistsCount = Number(input[1]);
let clothingPrice = Number(input[2]);

let decor = budget * 0.10;
let clothing = statistsCount * clothingPrice;
if(statistsCount > 150){
    clothing = clothing * 0.90;
}

let sum = decor + clothing;
let diff = Math.abs(budget-sum);

if(sum > budget){
    console.log("Not enough money!");
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
}else{
    console.log("Action!" );
    console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
}

}
godzilaVsKong(["9587.88",
"222",
"55.68"])