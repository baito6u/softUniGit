function yardGreening(input) {
    let area = Number(input[0]);
    
    let expence = area * 7.61;
    let discount = expence * 0.18;
    let finalPrice = expence - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["150"]);