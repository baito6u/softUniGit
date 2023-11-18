function solve(input) {
    let fanName = input[0];
    let estimamtedBudget = Number(input[1]);
    let bearBottels = Number(input[2]);
    let chipsPacks = Number(input[3]);

    let priceOfBeers = 1.2 * bearBottels;
    let priceofChips = Math.ceil((priceOfBeers * 0.45) * chipsPacks);

    let totalSum = priceOfBeers + priceofChips

    if (totalSum <= estimamtedBudget) {
        console.log(`${fanName} bought a snack and has ${(estimamtedBudget - totalSum).toFixed(2)} leva left.`);
    } else {
        console.log(`${fanName} needs ${(totalSum - estimamtedBudget).toFixed(2)} more leva!`);
    }
}

solve(["Valentin",
    "5",
    "2",
    "4"])

