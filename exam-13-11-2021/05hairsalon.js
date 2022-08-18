function hairSalon(input) {
 
    let index = 0;
    let target = input[index];
    index++;
 
    let command = input[index];
    index++;
 
    let sum = 0;
 
    let isCollected = false;
 
    while (command !== "closed") {
        let action = command;
        let type = input[index];
        index++;
 
        if (action === "haircut") {
            if (type === "mens") {
                sum += 15;
            } else if (type === "ladies") {
                sum += 20;
            } else if (type === "kids") {
                sum += 10;
            }
 
        } else if (action === "color") {
            if (type === "touch up") {
                sum += 20;
            } else if (type === "full color") {
                sum += 30;
            }
        }
 
 
        if (sum >= target) {
            isCollected = true;
            console.log("You have reached your target for the day!");
            break;
        }
        command = input[index];
        index++;
 
    }
 
    let diff = Math.abs(target - sum)
 
    if (!isCollected) {
        console.log(`Target not reached! You need ${diff}lv. more.`);
    }
    console.log(`Earned money: ${sum}lv.`);
 
}
hairSalon(["300",
    "haircut",
    "ladies",
    "haircut",
    "kids",
    "color",
    "touch up",
    "closed"])