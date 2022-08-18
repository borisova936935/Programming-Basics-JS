function exam (input){

let fanName = input[0];
let budget = Number(input[1]);
let beersCount = Number(input[2]);
let chipsCount = Number(input[3]);


let beers = beersCount * 1.20;
let chips = Math.ceil(chipsCount * (beers * 0.45));
let totalPrice = beers + chips;

let diff = Math.abs(totalPrice-budget)

if(budget >= totalPrice){
    console.log(`${fanName} bought a snack and has ${diff.toFixed(2)} leva left.`);
}else {
    console.log(`${fanName} needs ${diff.toFixed(2)} more leva!`);
}

}
exam(["Valentin",
"5",
"2",
"4"])