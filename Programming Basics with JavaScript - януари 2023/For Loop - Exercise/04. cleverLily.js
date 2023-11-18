function cleverLily(input) {
    let age = Number(input[0]);
    let washMashinePrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let totalMoneySave = 0;
    let evenBirthdayMoney = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            totalMoneySave += evenBirthdayMoney;
            totalMoneySave -= 1;
            evenBirthdayMoney += 10;
        } else {
            totalMoneySave += pricePerToy;
        }
    }
    if (totalMoneySave >= washMashinePrice) {
        console.log(`Yes! ${(totalMoneySave - washMashinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washMashinePrice - totalMoneySave).toFixed(2)}`);
    }
}

cleverLily(["10","170.00","6"]);
