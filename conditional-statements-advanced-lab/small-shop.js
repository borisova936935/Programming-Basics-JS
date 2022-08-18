function smallShop(input) {
  let product = input[0];
  let location = input[1];
  let quantity = Number(input[2]);
  let finalSum = 0;
  if (location === "Sofia") {
    switch (product) {
      case "coffee":
        finalSum = quantity * 0.5;
        break;
      case "water":
        finalSum = quantity * 0.8;
        break;
      case "beer":
        finalSum = quantity * 1.2;
        break;
      case "sweets":
        finalSum = quantity * 1.45;
        break;
      case "peanuts":
        finalSum = quantity * 1.6;
        break;
    }
  } else if (location === "Plovdiv") {
    switch (product) {
      case "coffee":
        finalSum = quantity * 0.4;
        break;
      case "water":
        finalSum = quantity * 0.7;
        break;
      case "beer":
        finalSum = quantity * 1.15;
        break;
      case "sweets":
        finalSum = quantity * 1.3;
        break;
      case "peanuts":
        finalSum = quantity * 1.5;
        break;
    }
  } else if (location === "Varna") {
    switch (product) {
      case "coffee":
        finalSum = quantity * 0.45;
        break;
      case "water":
        finalSum = quantity * 0.7;
        break;
      case "beer":
        finalSum = quantity * 1.1;
        break;
      case "sweets":
        finalSum = quantity * 1.35;
        break;
      case "peanuts":
        finalSum = quantity * 1.55;
        break;
    }
  }
  console.log(finalSum);
}
smallShop(["coffee", "Varna", "2"]);
