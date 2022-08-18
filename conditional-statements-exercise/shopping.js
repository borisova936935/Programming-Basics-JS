function shopping(input) {
  let budget = Number(input[0]);
  let videoCardsCount = Number(input[1]);
  let processorsCount = Number(input[2]);
  let ramCount = Number(input[3]);

  let videocardPrice = videoCardsCount * 250;
  let processorsPrice = processorsCount * (videocardPrice * 0.35);
  let ramPrice = ramCount * (videocardPrice * 0.1);

  let sum = videocardPrice + processorsPrice + ramPrice;

  if (videoCardsCount > processorsCount) {
    sum *= 0.85;
  }
  let diff = Math.abs(budget - sum);

  if (budget >= sum) {
    console.log(`You have ${diff.toFixed(2)} leva left!`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
  }
}
shopping(["920.45", "3", "1", "1"]);
