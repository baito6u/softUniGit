function blackFlag(input) {
    let days = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let expectedPlunder = Number(input[2]);

    let totalPlunder = 0;

    for (let index = 1; index <= days; index++) {
        totalPlunder += dailyPlunder;

        if (index % 3 === 0) {
            totalPlunder += dailyPlunder * 0.5;
        }
        if (index % 5 === 0) {
            totalPlunder *= 0.70;
        }
    }
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = totalPlunder / expectedPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(['5', '40', '100']);
console.log('---------------------');
blackFlag(['10', '20', '380']);