function shootingMovie(input) {
    let filmBudget = Number(input[0]);
    let numberOfExtras = Number(input[1]);
    let priceForClothing = Number(input[2]);

    let decor = filmBudget * 0.1;
    let totalCoastOfExtras = numberOfExtras * priceForClothing;
    let totalCoast = decor + totalCoastOfExtras;

    if (numberOfExtras > 150) {
        totalCoastOfExtras = totalCoastOfExtras - (0.1 * totalCoastOfExtras);
        totalCoast = decor + totalCoastOfExtras;

    } if (totalCoast > filmBudget) {
        let lackingMoney = totalCoast - filmBudget;
    console.log("Not enough money!");
    console.log(`Wingard needs ${lackingMoney.toFixed(2)} leva more.`);
    } else {
        let moneyLeft = filmBudget - totalCoast;
    console.log("Action!");
    console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
} 
shootingMovie(["9587.88","222","55.68"]);
