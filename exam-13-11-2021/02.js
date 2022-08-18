function exam(input){

let tShirt = Number(input[0]);
let neededSum = Number(input[1]);

let shorts = tShirt * 0.75;
let socks = shorts * 0.20;
let buttons = (tShirt + shorts) * 2;

let sum = tShirt + shorts + socks + buttons;
let finalsum = sum - (sum* 0.15);

let diff = Math.abs(finalsum - neededSum)

if(finalsum >= neededSum){
    console.log("Yes, he will earn the world-cup replica ball!");
    console.log(`His sum is ${finalsum.toFixed(2)} lv.`);
}else{
    console.log("No, he will not earn the world-cup replica ball.");
    console.log(`He needs ${diff.toFixed(2)} lv. more.`);
}


}
exam(["59.99",
"500"])