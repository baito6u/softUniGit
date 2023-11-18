function bitcoinMining(array) {
    let totalBitcoin = 0;
    let bitcoinPurchase = 0;
    let daysCount = 0;
    let moneyEarn = 0;
    let totalMoney = 0;
    let goldLevCourse = 67.51;
    let oneBitcoin = 11949.16;

    for (let i = 0; i < array.length; i++) {
        let goldMined = array[i];
        daysCount++;
        if (daysCount % 3 === 0) {
            goldMined -= goldMined * 0.30;
        }
        moneyEarn = goldMined * goldLevCourse;
        totalMoney += moneyEarn;
        while (totalMoney >= oneBitcoin) {
            totalMoney -= oneBitcoin;
            totalBitcoin++;
            if (totalBitcoin === 1) {
                bitcoinPurchase = daysCount;
            }
        }
    }
    console.log(`Bought bitcoins: ${totalBitcoin}`);
    if (bitcoinPurchase > 0) {
        console.log(`Day of the first purchased bitcoin: ${bitcoinPurchase}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);