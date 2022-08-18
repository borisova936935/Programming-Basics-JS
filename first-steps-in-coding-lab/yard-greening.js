function yardGreening(input){
    let area = Number(input[0]);
    let price = 7.61;
    let sum = area * price;
    let discount = sum * 0.18;
    let finalPrice = sum - discount;
    console.log(`The final price is: ${finalPrice} lv. 
    The discount is: ${discount} lv.`);
    }
    yardGreening(["550"])