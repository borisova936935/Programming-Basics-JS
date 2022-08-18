function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let fruitsCount = Number(input[2]);
  let finalSum = 0;
  if (day === "Monday") {
    switch (fruit) {
      case "banana":
        finalSum = fruitsCount * 2.5;
        break;
      case "apple":
        finalSum = fruitsCount * 1.2;
        break;
      case "orange":
        finalSum = fruitsCount * 0.85;
        break;
      case "grapefruit":
        finalSum = fruitsCount * 1.45;
        break;
      case "kiwi":
        finalSum = fruitsCount * 2.7;
        break;
      case "pineapple":
        finalSum = fruitsCount * 5.5;
        break;
      case "grapes":
        finalSum = fruitsCount * 3.85;
        break;
    }
  } else if (day === "Tuesday") {
    switch (fruit) {
      case "banana":
        finalSum = fruitsCount * 2.5;
        break;
      case "apple":
        finalSum = fruitsCount * 1.2;
        break;
      case "orange":
        finalSum = fruitsCount * 0.85;
        break;
      case "grapefruit":
        finalSum = fruitsCount * 1.45;
        break;
      case "kiwi":
        finalSum = fruitsCount * 2.7;
        break;
      case "pineapple":
        finalSum = fruitsCount * 5.5;
        break;
      case "grapes":
        finalSum = fruitsCount * 3.85;
        break;
    }
  } else if (day === "Wednesday") {
    switch (fruit) {
      case "banana":
        finalSum = fruitsCount * 2.5;
        break;
      case "apple":
        finalSum = fruitsCount * 1.2;
        break;
      case "orange":
        finalSum = fruitsCount * 0.85;
        break;
      case "grapefruit":
        finalSum = fruitsCount * 1.45;
        break;
      case "kiwi":
        finalSum = fruitsCount * 2.7;
        break;
      case "pineapple":
        finalSum = fruitsCount * 5.5;
        break;
      case "grapes":
        finalSum = fruitsCount * 3.85;
        break;
    }
  } else if (day === "Thursday") {
    switch (fruit) {
      case "banana":
        finalSum = fruitsCount * 2.5;
        break;
      case "apple":
        finalSum = fruitsCount * 1.2;
        break;
      case "orange":
        finalSum = fruitsCount * 0.85;
        break;
      case "grapefruit":
        finalSum = fruitsCount * 1.45;
        break;
      case "kiwi":
        finalSum = fruitsCount * 2.7;
        break;
      case "pineapple":
        finalSum = fruitsCount * 5.5;
        break;
      case "grapes":
        finalSum = fruitsCount * 3.85;
        break;
    }
  } else if (day === "Friday") {
    switch (fruit) {
      case "banana":
        finalSum = fruitsCount * 2.5;
        break;
      case "apple":
        finalSum = fruitsCount * 1.2;
        break;
      case "orange":
        finalSum = fruitsCount * 0.85;
        break;
      case "grapefruit":
        finalSum = fruitsCount * 1.45;
        break;
      case "kiwi":
        finalSum = fruitsCount * 2.7;
        break;
      case "pineapple":
        finalSum = fruitsCount * 5.5;
        break;
      case "grapes":
        finalSum = fruitsCount * 3.85;
        break;
    }
  } else if (day === "Saturday") {
    switch (fruit) {
      case "banana":
        finalSum = fruitsCount * 2.7;
        break;
      case "apple":
        finalSum = fruitsCount * 1.25;
        break;
      case "orange":
        finalSum = fruitsCount * 0.9;
        break;
      case "grapefruit":
        finalSum = fruitsCount * 1.6;
        break;
      case "kiwi":
        finalSum = fruitsCount * 3.0;
        break;
      case "pineapple":
        finalSum = fruitsCount * 5.6;
        break;
      case "grapes":
        finalSum = fruitsCount * 4.2;
        break;
    }
  } else if (day === "Sunday") {
    switch (fruit) {
      case "banana":
        finalSum = fruitsCount * 2.7;
        break;
      case "apple":
        finalSum = fruitsCount * 1.25;
        break;
      case "orange":
        finalSum = fruitsCount * 0.9;
        break;
      case "grapefruit":
        finalSum = fruitsCount * 1.6;
        break;
      case "kiwi":
        finalSum = fruitsCount * 3.0;
        break;
      case "pineapple":
        finalSum = fruitsCount * 5.6;
        break;
      case "grapes":
        finalSum = fruitsCount * 4.2;
        break;
    }
  }
  if (
    (day !== "Monday" &&
      day !== "Tuesday" &&
      day !== "Wednesday" &&
      day !== "Thursday" &&
      day !== "Friday" &&
      day !== "Saturday" &&
      day !== "Sunday") ||
    (fruit !== "banana" &&
      fruit !== "apple" &&
      fruit !== "orange" &&
      fruit !== "grapefruit" &&
      fruit !== "kiwi" &&
      fruit !== "pineapple" &&
      fruit !== "grapes")
  ) {
    console.log("error");
  } else {
    console.log(finalSum.toFixed(2));
  }
}
fruitShop(["apple", "Tuesday", "2"]);
