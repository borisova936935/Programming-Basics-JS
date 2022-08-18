function projectCreation(input){
    let name = input[0];
    let projectsCount = Number(input[1]);
    let oneProjectTime = 3;
    let finishTime = projectsCount * oneProjectTime;
    console.log(`The architect ${name} will need ${finishTime} hours to complete ${projectsCount} project/s.`);
    }
    projectCreation(["George", "4"])
    