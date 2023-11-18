function fruit(fruit, weightInGrams, pricePerKilo) {

    let weightInKg = Number(weightInGrams / 1000);

    let moneyNeeded = weightInKg * pricePerKilo

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);