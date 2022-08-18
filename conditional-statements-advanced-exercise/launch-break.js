function launchBreak(input) {
    let name = input[0];
    let serialTime = Number(input[1]);
    let breakTime = Number(input[2]);
  
    let launchTime = breakTime / 8;
    let relaxTime = breakTime / 4;
  
    let leftTime = breakTime - launchTime - relaxTime;
    let diff = Math.abs(serialTime - leftTime);
  
    if (leftTime >= serialTime) {
      console.log(`You have enough time to watch ${name} and left with ${Math.ceil(diff)} minutes free time.`);
    } else {
      console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(diff)} more minutes.`);
    }
  }
  launchBreak(["Game of Thrones", "60", "96"]);