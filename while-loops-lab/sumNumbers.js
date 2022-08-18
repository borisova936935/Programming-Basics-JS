function sumNumbers(input) {

    let index = 0;
    let firstNumber = Number(input[index]);
    index++;

    let sum = 0;

    while (sum < firstNumber) {
        sum += Number(input[index]);
        index++
    }
    console.log(sum);

}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])