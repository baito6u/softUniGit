function nfs(input) {

    let carCount = +input.shift();
    let result = new Map();

    for (let element of input) {
        if (element === 'Stop') {
            break;
        }
        if (element.includes('|')) {
            let [car, milage, fuel] = element.split('|');

            result.set(car, []);
            result.get(car).push(Number(milage));
            result.get(car).push(Number(fuel));
        }
        if (element.includes(' : ')) {
            let tokens = element.split(' : ');

            if (element.includes('Refuel')) {
                let currentCar = tokens[1];
                let currentFuel = +tokens[2];

                let sum = currentFuel + result.get(currentCar)[1];

                if (sum > 75) {
                    result.get(currentCar)[1] = 75;
                    sum -= 75;
                    console.log(`${currentCar} refueled with ${currentFuel - sum} liters`);
                } else {
                    result.get(currentCar)[1] = sum;
                    console.log(`${currentCar} refueled with ${currentFuel} liters`);
                }
            } else if (element.includes('Revert')) {
                let currentCar = tokens[1];
                let milage = +tokens[2];

                result.get(currentCar)[0] -= milage;

                if (result.get(currentCar)[0] < 10000) {
                    result.get(currentCar)[0] = 10000;
                } else {
                    console.log(`${currentCar} mileage decreased by ${milage} kilometers`);
                }
            } else if (element.includes('Drive')) {
                let currentCar = tokens[1];
                let distance = +tokens[2];
                let givenFuel = +tokens[3];

                if (givenFuel <= result.get(currentCar)[1]) {
                    result.get(currentCar)[1] -= givenFuel;
                    result.get(currentCar)[0] += distance;
                    console.log(`${currentCar} driven for ${distance} kilometers. ${givenFuel} liters of fuel consumed.`);
                } else {
                    console.log('Not enough fuel to make that ride');
                }
                if (result.get(currentCar)[0] >= 100000) {
                    result.delete(currentCar);
                    console.log(`Time to sell the ${currentCar}!`);
                }
            }
        }
    }

    for (const [car, carInfo] of result) {
        console.log(`${car} -> Mileage: ${carInfo[0]} kms, Fuel in the tank: ${carInfo[1]} lt.`);
    }
}

nfs([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]
);