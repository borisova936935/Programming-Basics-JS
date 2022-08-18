function depositCalculator(input) {
    let depositAmount = Number(input[0]);
    let term = Number(input[1]);
    let anualIneterstRate = Number(input[2]);
    let yearIneterstRate = depositAmount * (anualIneterstRate / 100);
    let monthInterestRate = yearIneterstRate / 12;
    let sum = depositAmount + (monthInterestRate * term);
    console.log(sum);
}
depositCalculator(["200", "3", "5.7"]);