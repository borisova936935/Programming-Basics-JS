function petShop(input){
    let dogs = Number(input[0]);
    let animals = Number(input[1]);
    let dogFood = dogs * 2.50;
    let animalFood = animals * 4;
    let result = dogFood + animalFood;
    console.log(`${result} lv.`);
    }
    petShop(["5", "4"])
    