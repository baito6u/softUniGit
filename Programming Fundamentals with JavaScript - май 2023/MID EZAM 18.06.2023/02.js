function two(array) {

    let travelRoot = array.shift().split('||');
    let startFuel = Number(array[0]);
    let startAmo = Number(array[1]);

    let fuelAdded = 0;
    let amoAdded = 0;
    let enemmyCount = 0;

    for (let index = 0; index < travelRoot.length; index++) {
        let currentIndex = travelRoot[index].split(' ');
        let command = currentIndex[0];

        switch (command) {
            case 'Travel':
                let lightYears = Number(currentIndex[1]);
                startFuel -= lightYears;
                if (startFuel > 0) {
                    console.log(`The spaceship travelled ${lightYears} light-years.`);
                } else {
                    console.log('Mission failed.');
                    return;
                }
                break;
            case 'Enemy':
                let enemyArmor = Number(currentIndex[1]);
                if (startAmo >= enemyArmor) {
                    console.log(`An enemy with ${enemyArmor} armour is defeated.`);
                    startAmo -= enemyArmor;
                } else if (startAmo <= enemyArmor) {
                    if (startFuel > enemyArmor) {
                        console.log(`An enemy with ${enemyArmor} armour is outmaneuvered.`);
                        startFuel -= enemyArmor;
                    } else {
                        console.log('Mission failed.');
                        return;
                    }
                }
                break;
            case 'Repair':
                let added = Number(currentIndex[1]);
                startAmo += added * 2;
                startFuel += added;
                console.log(`Ammunitions added: ${added * 2}.`);
                console.log(`Fuel added: ${added}.`);
                break;
            case 'Titan':
                console.log('You have reached Titan, all passengers are safe.');
                break;
        }
    }
}

two(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100']);