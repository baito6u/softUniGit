function vacation(input) {
    let index = 0;

    let PriceOfTheExcursion = Number(input[index]);
    index++;
    let availableMoney = Number(input[index]);
    index++;

    let action = input[index];
    let money = Number(input[index]);

    let consecutiveSpendCounter = 0;
    let totalDaysCouter = 0;

    while (true) {
        totalDaysCouter++;
        action = input[index];
        index++;
        money = Number(input[index]);
        index++;

        if (action === 'spend') {
            availableMoney -= money;
            if (availableMoney < 0) {
                availableMoney = 0;
            }
            consecutiveSpendCounter++;
        } else if (action === 'save') {
            availableMoney += money;
            consecutiveSpendCounter = 0;
        }

        if (consecutiveSpendCounter == 5) {
            console.log("You can't save the money.");
            console.log(totalDaysCouter);
            break;
        }

        if (availableMoney >= PriceOfTheExcursion) {
            console.log(`You saved the money for ${totalDaysCouter} days.`);
            break;
        }
    }

}

vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])
    ;