function toyShop(input) {
  let tripPrice = Number(input[0]);

  let puzzlesCount = Number(input[1]);
  let dollCount = Number(input[2]);
  let bearsCount = Number(input[3]);
  let minionsCount = Number(input[4]);
  let trucksCount = Number(input[5]);

  let puzzlesPrice = puzzlesCount * 2.6;
  let dollPrice = dollCount * 3;
  let bearsPrice = bearsCount * 4.1;
  let minionsPrice = minionsCount * 8.2;
  let trucksPrice = trucksCount * 2;

  let priceForAllToys =
    puzzlesPrice + dollPrice + bearsPrice + minionsPrice + trucksPrice;

  let allToysCount =
    puzzlesCount + dollCount + bearsCount + minionsCount + trucksCount;

  if (allToysCount >= 50) {
    priceForAllToys = priceForAllToys * 0.75;
  }
  let moneyAfterRent = priceForAllToys * 0.9;

  if (moneyAfterRent >= tripPrice) {
    console.log(`Yes! ${(moneyAfterRent - tripPrice).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(tripPrice - moneyAfterRent).toFixed(2)} lv needed.`
    );
  }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);
