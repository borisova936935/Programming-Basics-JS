function hotelRoom(input) {
  let month = input[0];
  let nights = Number(input[1]);
  let sumStudio = 0;
  let sumApartment = 0;

  switch (month) {
    case "May":
      sumStudio = nights * 50;
      sumApartment = nights * 65;
      if (nights > 14) {
        sumApartment = sumApartment * 0.9;
      }
      if (nights > 7 && nights <= 14) {
        sumStudio = sumStudio * 0.95;
      } else if (nights > 14) {
        sumStudio = sumStudio * 0.7;
      }
      break;

    case "June":
      sumStudio = nights * 75.2;
      sumApartment = nights * 68.7;
      if (nights > 14) {
        sumApartment = sumApartment * 0.9;
      }
      if (nights > 14) {
        sumStudio = sumStudio * 0.8;
      }
      break;

    case "July":
      sumStudio = nights * 76;
      sumApartment = nights * 77;
      if (nights > 14) {
        sumApartment = sumApartment * 0.9;
      }
      break;

    case "August":
      sumStudio = nights * 76;
      sumApartment = nights * 77;
      if (nights > 14) {
        sumApartment = sumApartment * 0.9;
      }
      break;

    case "September":
      sumStudio = nights * 75.2;
      sumApartment = nights * 68.7;
      if (nights > 14) {
        sumApartment = sumApartment * 0.9;
      }
      if (nights > 14) {
        sumStudio = sumStudio * 0.8;
      }
      break;

    case "October":
      sumStudio = nights * 50;
      sumApartment = nights * 65;
      if (nights > 14) {
        sumApartment = sumApartment * 0.9;
      }
      if (nights > 7 && nights <= 14) {
        sumStudio = sumStudio * 0.95;
      } else if (nights > 14) {
        sumStudio = sumStudio * 0.7;
      }
      break;
  }

  console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);
