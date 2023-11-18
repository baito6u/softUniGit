function basketballEquipment(input) {
    let annualTrainingFee = Number(input[0]);

    let priceOfShoes = annualTrainingFee - (annualTrainingFee * 0.40);
    let priceOfTeam = priceOfShoes - (priceOfShoes * 0.20);
    let priceOfBall = 0.25 * priceOfTeam;
    let priceOfAccesories = 0.2 * priceOfBall;
    let totalPriceOfEquipment = annualTrainingFee + priceOfShoes + priceOfTeam + priceOfBall + priceOfAccesories;

    console.log(totalPriceOfEquipment);
}
basketballEquipment(["550"]);

/*
Cost of training for a year: 365
Price of basketball shoes: 365 – 40% = 219
Price of a basketball team: 219 – 20% = 175.20
Cost of a basketball: 1/4 of 175.20 = 43.80
Price of basketball accessories: 1 / 5 of 43.80 = 8.76
Total price for the equipment: 365 + 219 + 175.20 + 43.80 + 8.76 = 811.76
*/