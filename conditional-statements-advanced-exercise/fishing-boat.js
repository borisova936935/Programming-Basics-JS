function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishersCount = Number(input[2]);
  let rent = 0;

  switch (season) {
    case "Spring":
      rent = 3000;
      if (fishersCount <= 6) {
        rent = rent * 0.9;
        if (fishersCount % 2 === 0) {
          rent = rent * 0.95;
        }
      } else if (fishersCount >= 7 && fishersCount <= 11) {
        rent = rent * 0.85;
        if (fishersCount % 2 === 0) {
          rent = rent * 0.95;
        }
      } else if (fishersCount >= 12) {
        rent = rent * 0.75;
        if (fishersCount % 2 === 0) {
          rent = rent * 0.95;
        }
      }
      break;

    case "Summer":
      rent = 4200;
      if (fishersCount <= 6) {
        rent = rent * 0.9;
        if (fishersCount % 2 === 0) {
          rent = rent * 0.95;
        }
      } else if (fishersCount >= 7 && fishersCount <= 11) {
        rent = rent * 0.85;
        if (fishersCount % 2 === 0) {
          rent = rent * 0.95;
        }
      } else if (fishersCount >= 12) {
        rent = rent * 0.75;
        if (fishersCount % 2 === 0) {
          rent = rent * 0.95;
        }
      }
      break;

    case "Autumn":
      rent = 4200;
      if (fishersCount <= 6) {
        rent = rent * 0.9;
      } else if (fishersCount >= 7 && fishersCount <= 11) {
        rent = rent * 0.85;
      } else if (fishersCount >= 12) {
        rent = rent * 0.75;
      }
      break;

    case "Winter":
      rent = 2600;
      if (fishersCount <= 6) {
        rent = rent * 0.9;
        if (fishersCount % 2 === 0) {
          rent = rent * 0.95;
        }
      } else if (fishersCount >= 7 && fishersCount <= 11) {
        rent = rent * 0.85;
        if (fishersCount % 2 === 0) {
          rent = rent * 0.95;
        }
      } else if (fishersCount >= 12) {
        rent = rent * 0.75;
        if (fishersCount % 2 === 0) {
          rent = rent * 0.95;
        }
      }
      break;
  }

  let diff = Math.abs(budget - rent);

  if (budget >= rent) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}
fishingBoat(["3000", "Summer", "11"]);
