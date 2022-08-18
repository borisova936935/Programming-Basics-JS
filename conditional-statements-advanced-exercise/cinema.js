function cinema(input) {
    let type = input[0];
    let roll = Number(input[1]);
    let column = Number(input[2]);
    let money = 0;
    if (type === "Premiere") {
      money = roll * column * 12;
    } else if (type === "Normal") {
      money = roll * column * 7.5;
    } else if (type === "Discount") {
      money = roll * column * 5;
    }
    console.log(money);
  }
  cinema(["Premiere", "10", "12"]);