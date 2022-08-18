function exam(input) {

    let speed = Number(input[0]);
    let litersFuel = Number(input[1]);

    let distance = 384400 * 2;
    let time = Math.ceil(distance / speed);

    let totalTime = time + 3;
    
    let fuel = (litersFuel * distance)/ 100;

    console.log(totalTime);
    console.log(fuel);

}
exam(["10000",
    "5"])