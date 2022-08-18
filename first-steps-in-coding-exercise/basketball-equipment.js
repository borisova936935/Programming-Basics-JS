function basketballEquipment(input) {
  let annualPrice = Number(input[0]);
  let sneakers = annualPrice * 0.6;
  let equip = sneakers * 0.8;
  let ball = equip / 4;
  let accessory = ball / 5;
  let sum = annualPrice + sneakers + equip + ball + accessory;
  console.log(sum);
}
basketballEquipment(["365 "]);
