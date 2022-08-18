function birthdayParty(input) {
    let rent = Number(input[0])

    let cake = rent * 0.20;
    let drinks = cake * 0.55;
    let animators = rent / 3;

    let result = cake + drinks + animators + rent;

    console.log(result);
}
birthdayParty(["2250"])
