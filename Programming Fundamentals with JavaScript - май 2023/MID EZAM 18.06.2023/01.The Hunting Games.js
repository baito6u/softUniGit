function one(array) {

    let days = Number(array.shift());
    let countOfPlayers = Number(array.shift());
    let groupEnergy = Number(array.shift());
    let waterPerDayForPerson = Number(array.shift());
    let foodPerDayForPerson = Number(array.shift());

    let totalWater = days * countOfPlayers * waterPerDayForPerson;
    let totalFood = days * countOfPlayers * foodPerDayForPerson;

    let waterDay = 0;
    let foodDay = 0;

    for (let index = 0; index < array.length; index++) {
        let currDayEnergyLost = array[index];
        groupEnergy -= currDayEnergyLost;

        if (groupEnergy <= 0) {
            break;
        }

        waterDay++;
        if (waterDay >= 2) {
            totalWater -= totalWater * 0.3;
            groupEnergy += groupEnergy * 0.05;
            waterDay = 0;
        }

        foodDay++;
        if (foodDay >= 3) {
            totalFood -= totalFood / countOfPlayers;
            groupEnergy += groupEnergy * 0.1;
            foodDay = 0;
        }
    }

    if (groupEnergy >= 1) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }
}

one((["10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"])
);