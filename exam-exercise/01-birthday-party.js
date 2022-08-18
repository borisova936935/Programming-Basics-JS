function birthdayParty(input){
 
let rent = Number(input);
 
let cakePrice = rent * 0.20;
let drinksPrice = cakePrice - (cakePrice * 0.45)
let animatorPrice = rent / 3;
 
let sum = rent + cakePrice + drinksPrice + animatorPrice;
console.log(sum);
 
}
birthdayParty(["2250"])