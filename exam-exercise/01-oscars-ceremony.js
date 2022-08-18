function oscarsCeremony(input){

let rent = Number(input[0]);
let statues = rent - (rent * 0.30);
let catering = statues - (statues * 0.15);
let sound = catering / 2;

let result = rent + statues + catering + sound;

console.log(result.toFixed(2));

}
oscarsCeremony(["3500"])