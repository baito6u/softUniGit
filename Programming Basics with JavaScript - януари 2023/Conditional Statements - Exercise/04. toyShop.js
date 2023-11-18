 function toyShop(input) {
    let excursion = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let mignon = Number(input[4]);
    let truck = Number(input[5]);

    let incom = puzzle * 2.6 + doll * 3 + bear * 4.1 + mignon * 8.2 + truck * 2;
    let count = puzzle + doll + bear + mignon + truck;

    if (count >= 50) {
        incom = incom * 0.75;
    }
    let incomAfterRent = incom * 0.9;

    if (incomAfterRent >= excursion) {
        let moneyLeft = incomAfterRent - excursion;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        let lackingMoney = excursion - incomAfterRent;
        console.log(`Not enough money! ${lackingMoney.toFixed(2)} lv needed.`);
    }

}

toyShop(["320","8","2","5","5","1"]);
