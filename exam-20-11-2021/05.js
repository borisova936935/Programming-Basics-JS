function exam (input){

    let index = 0;
let boughtFood = Number(input[index]) * 1000;
index++;
let command = input[index];
index++;

let totalEatenFood = 0;

while(command !== "Adopted"){
    let eatenFood = Number(command);
    totalEatenFood+=eatenFood;

    command = input[index];
    index++;
}

let diff = Math.abs(totalEatenFood - boughtFood);

if(boughtFood >= totalEatenFood){
    console.log(`Food is enough! Leftovers: ${diff} grams.`);
}else {
    console.log(`Food is not enough. You need ${diff} grams more.`);
}

}
exam(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])