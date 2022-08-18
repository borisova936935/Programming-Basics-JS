function cleverLily(input) {
  let lilysAge = Number(input[0]);
  let washerPrice = Number(input[1]);
  let toyPrice = Number(input[2]);

  let toysCounter = 0;
  let savedMoney = 0;
  let stolenMoney = 0;
  let money = 10;

  for (let currentBDay = 1; currentBDay <= lilysAge; currentBDay++) {
    if (currentBDay % 2 === 0) {
      savedMoney += money;
      money += 10;
      stolenMoney++;
    } else {
      toysCounter++;
    }
  }
  let moneyFromToys = toysCounter * toyPrice;
  let totalSavedMoney = savedMoney - stolenMoney + moneyFromToys;

  if (totalSavedMoney >= washerPrice) {
    console.log(`Yes! ${(totalSavedMoney - washerPrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(washerPrice - totalSavedMoney).toFixed(2)}`);
  }
}
cleverLily(["21", "1570.98", "3"]);
