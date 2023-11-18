function coins(input) {
    let change = Number(input[0]);
    let coinsCount = 0;

    let changeInCents = Math.round(change * 100);  // с това превърщаме цялото ресто в центове

    while (changeInCents > 0) {
        if (changeInCents >= 200) {
            changeInCents -= 200;
        } else if (changeInCents >= 100) {
            changeInCents -= 100;
        } else if (changeInCents >= 50) {
            changeInCents -= 50;
        } else if (changeInCents >= 20) {
            changeInCents -= 20;
        } else if (changeInCents >= 10) {
            changeInCents -= 10;
        } else if (changeInCents >= 5) {
            changeInCents -= 5;
        } else if (changeInCents >= 2) {
            changeInCents -= 2;
        } else if (changeInCents >= 1) {
            changeInCents -= 1;
        }
        coinsCount++;
    }
    console.log(coinsCount);
}

coins(["0.56"]);