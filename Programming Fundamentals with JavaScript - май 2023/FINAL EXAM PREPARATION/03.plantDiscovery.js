function plantDiscovery(input) {

    let plantCount = Number(input.shift());
    
    let plants = {};

    for (let i = 0; i < plantCount; i++) {
        let line = input.shift();
        let [name, rarity] = line.split('<->');

        plants[name] = {
            rarity: Number(rarity),
            ratings: [],
        };
    }

    let line = input.shift();

    while (line != 'Exhibition') {

        let [command, args] = line.split(': ');
        let [name, argument] = args.split(' - ');
        let plant = plants[name];

        if (plant) {
            switch (command) {
                case 'Rate':
                    let rating = Number(argument);
                    plant.ratings.push(rating);
                    break;
                case 'Update':
                    let rarity = Number(argument);
                    plant.rarity = rarity;
                    break; 
                case 'Reset':
                    plant.ratings = [];
                    break;
            }
        } else {
            console.log('error');
        }

        line = input.shift();
    }
    console.table(plants)
    console.log('Plants for the exhibition:');

    for (const name in plants) {
        let averageRating = average(plants[name].ratings);

        console.log(`- ${name}; Rarity: ${plants[name].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }
    function average(numbers) {
        if (numbers.length === 0) {
            return 0;
        }

        let sum = numbers.reduce((s, num) => s + num, 0);
        let result = sum / numbers.length;

        return result;
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);