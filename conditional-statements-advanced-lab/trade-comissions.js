function tradeComissions(input) {
  let city = input[0];
  let sales = Number(input[1]);
  let comission = 0;
  switch (city) {
    case "Sofia":
      if (sales >= 0 && sales <= 500) {
        comission = sales * 0.05;
      } else if (sales > 500 && sales <= 1000) {
        comission = sales * 0.07;
      } else if (sales > 1000 && sales <= 10000) {
        comission = sales * 0.08;
      } else if (sales > 10000) {
        comission = sales * 0.12;
      }
      break;
    case "Plovdiv":
      if (sales >= 0 && sales <= 500) {
        comission = sales * 0.055;
      } else if (sales > 500 && sales <= 1000) {
        comission = sales * 0.08;
      } else if (sales > 1000 && sales <= 10000) {
        comission = sales * 0.12;
      } else if (sales > 10000) {
        comission = sales * 0.145;
      }
      break;
    case "Varna":
      if (sales >= 0 && sales <= 500) {
        comission = sales * 0.045;
      } else if (sales > 500 && sales <= 1000) {
        comission = sales * 0.075;
      } else if (sales > 1000 && sales <= 10000) {
        comission = sales * 0.1;
      } else if (sales > 10000) {
        comission = sales * 0.13;
      }
      break;
  }
  if (
    (city !== "Sofia" && city !== "Plovdiv" && city !== "Varna") ||
    sales < 0
  ) {
    console.log("error");
  } else {
    console.log(comission.toFixed(2));
  }
}
tradeComissions(["Varna", "3874.50"]);
