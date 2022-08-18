function examPreparation(input) {

    let index = 0;
    let negativeGrades = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let sumGrades = 0;
    let counter = 0;
    let lastTask = "";
    let countNegativeGrades = 0;
    let isNeedBeak = false;

    while (command !== "Enough") {
        let currentTask = command;
        let currentGrade = Number(input[index]);
        index++;

        if (currentGrade <= 4) {
            countNegativeGrades++
        }

        if (countNegativeGrades === negativeGrades) {
            isNeedBeak = true;
            console.log(`You need a break, ${countNegativeGrades} poor grades.`);
            break;
        }

        sumGrades += currentGrade;
        counter++
        lastTask = currentTask;
        command = input[index];
        index++;
    }
    
   if(!isNeedBeak){
    let avarageGrade = sumGrades / counter;
    console.log(`Average score: ${avarageGrade.toFixed(2)}`);
    console.log(`Number of problems: ${counter}`);
    console.log(`Last problem: ${lastTask}`);
   }
   
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])