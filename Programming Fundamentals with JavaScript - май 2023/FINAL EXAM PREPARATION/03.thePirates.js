function thePirates(input) {

    let towns = [];

    for (let line of input) {
        if (line === 'Sail') {
            break;
        }
        let [town, people, gold] = line.split('||');
        people = Number(people);
        gold = Number(gold);
        let currenTown = towns.find(x => x.town === town);
        if (!currenTown) {
            let newtown = {
                town,
                people: people,
                gold: gold,
            }
            towns.push(newtown);
        } else {
            currenTown.people += people;
            currenTown.gold += gold;
        }
    }

    let index = input.indexOf('Sail') + 1;
    let command = input[index];
    index++;

    while (command !== 'End') {
        let tokens = command.split('=>');
        let action = tokens[0];
        let town = tokens[1];
        let people;
        let gold;

        let indexCurrentTarget;
        let currentTarget = towns.find((x, i) => {
            if (x.town === town) {
                indexCurrentTarget = i;
                return true;
            }
            return false;
        });
        switch (action) {
            case 'Plunder':
                if (!currentTarget) {
                    break;
                }

                people = Number(tokens[2]);
                gold = Number(tokens[3]);
                currentTarget.people -= people;
                currentTarget.gold -= gold;
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                if (currentTarget.people <= 0 || currentTarget.gold <= 0) {
                    towns.splice(indexCurrentTarget, 1);
                    console.log(`${town} has been wiped off the map!`);
                }
                break;
            case 'Prosper':
                if (!currentTarget) {
                    break;
                }

                gold = Number(tokens[2]);

                if (gold < 0) {
                    console.log("Gold added cannot be a negative number!");
                    break;
                }
                currentTarget.gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${currentTarget.gold} gold.`);
                break;
        }

        command = input[index];
        index++;
    }

    if (towns.length > 0) {
        console.log(`Ahoy, Captain! There are ${towns.length} wealthy settlements to go to:`);

        towns.forEach(el => {
            console.log(`${el.town} -> Population: ${el.people} citizens, Gold: ${el.gold} kg`);
        });
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}
thePirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);