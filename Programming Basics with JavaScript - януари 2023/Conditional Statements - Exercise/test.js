function calculateBudget(budget, actorsCount, clothesPrice) {
    let decorPrice = budget * 0.1;
    let clothesTotalPrice = actorsCount * clothesPrice;
    if (actorsCount > 150) {
      clothesTotalPrice *= 0.9;
    }
    let total = decorPrice + clothesTotalPrice;
    if (total > budget) {
      return `Not enough money!\nWingard needs ${(total - budget).toFixed(2)} leva more.`;
    } else {
      return `Action!\nWingard starts filming with ${(budget - total).toFixed(2)} leva left.`;
    }
  }
  
  console.log(calculateBudget(20000, 120, 55.5)); // "Action!\nWingard starts filming with 11340.00 leva left."
  console.log(calculateBudget(15437.62, 186, 57.99)); // "Action!\nWingard starts filming with 4186.33 leva left."
  console.log(calculateBudget(9587.88, 222, 55.68)); // "Not enough money!\nWingard needs 2495.77 leva more."
  