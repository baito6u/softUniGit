function fishingBoat(input) {
    let groupBudget = Number(input[0]);
    let season = input[1];
    let numOfFisherman = Number(input[2]);

    let priceOfRent = 0;

    switch (season) {
        case "Spring":
            priceOfRent = 3000; break;
        case "Summer":
        case "Autumn":
            priceOfRent = 4200; break;
        case "Winter":
            priceOfRent = 2600; break;
    }
    if (numOfFisherman <= 6) {
        priceOfRent *= 0.90;
    } else if (numOfFisherman <= 11) {
        priceOfRent *= 0.85;
    } else {
        priceOfRent *= 0.75;
    }
    if (numOfFisherman % 2 === 0 && season !== "Autumn") {
        priceOfRent *= 0.95;
    }
    let moneyLeft = groupBudget - priceOfRent;
    let moneyNeeded = priceOfRent - groupBudget;

    if (groupBudget >= priceOfRent) { 
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}
fishingBoat(["3000","Summer","11"]);
