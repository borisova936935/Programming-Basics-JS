function readText(input){

    let index = 0;
    while(true){
        let name = input[index];
        index++
        if(name === "Stop"){
            break;
        }
        console.log(name);
    }

}
readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])

//.....................differentWay......................................


function readText2(input){

    let index = 0;
    let command = input[index];
    index++

    while(command !== "Stop"){
        console.log(command);
        command = input[index];
        index++
    }

}
readText2(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])