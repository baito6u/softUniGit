function newHouse(input) {
    let flowerType = input[0];
    let numOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    switch (flowerType) {
        case "Roses":
            price = 5;
            if (numOfFlowers > 80) {
                price = price / 1.1;
            }break;
        case "Dahlias":
            price = 3.80;
            if (numOfFlowers > 90) {
                price = price / 1.15;
            }break;
        case "Tulips":  
            price = 2.80;
            if (numOfFlowers > 80) {
                price = price / 1.15;
            }break;
        case "Narcissus":
            price = 3.00;
            if (numOfFlowers < 120) {
                price = price * 1.15;
            }break;
        case "Gladiola":
            price = 2.50;
            if (numOfFlowers < 80) {
                price = price * 1.2;
            }break;
    }
    let coastForFlowers = numOfFlowers * price;
    let moneyLeft = budget - coastForFlowers;
    let moneyNeeded = coastForFlowers - budget;

    if (budget >= coastForFlowers){
        console.log(`Hey, you have a great garden with ${numOfFlowers} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }
}
newHouse(["Roses","55","250"]);
newHouse(["Tulips","88","260"]);
newHouse(["Narcissus","119","360"]);

// • Flower type - text with options - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
// • Number of flowers - an integer in the range [10…1000]
// • Budget - an integer in the range [50…2500]
// To print to the console on one line:
// • If their budget is sufficient - "Hey, you have a great garden with {number of flowers} {type of flowers} and {remaining amount} leva left."
// • If their budget is NOT enough - "Not enough money, you need {necessary amount} leva more."
// Amount to be formatted to the second decimal place.