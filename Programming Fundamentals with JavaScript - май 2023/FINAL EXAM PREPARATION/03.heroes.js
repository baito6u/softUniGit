function heroesOfCode(array) {

    let heroesCount = Number(array.shift());

    let heroes = {};

    for (let index = 0; index < heroesCount; index++) {
        let line = array.shift();

        let [name, hitPoints, manaPoints] = line.split(' ');

        heroes[name] = {
            hitPoints: Number(hitPoints),
            manaPoints: Number(manaPoints)
        }
    }
    let line = array.shift();

    while (line !== 'End') {
        let [command, name, ...arguments] = line.split(' - ');
        let hero = heroes[name];

        switch (command) {
            case 'Heal': {
                let amount = Number(arguments[0]);
                let difference = Math.min(100 - hero.hitPoints, amount);
                hero.hitPoints += difference;

                console.log(`${name} healed for ${difference} HP!`);
              
                break;
            }
            case 'Recharge': {
                let amount = Number(arguments[0]);
                let difference = Math.min(200 - hero.manaPoints, amount);
                hero.manaPoints += difference;
                
                console.log(`${name} recharged for ${difference} MP!`);
                
                break;
            }
            case 'TakeDamage': {
                let damage = Number(arguments[0]);
                let attacker = arguments[1];
                hero.hitPoints -= damage;

                if (hero.hitPoints <= 0) {
                    console.log(`${name} has been killed by ${attacker}!`);
                    delete heroes[name];

                } else {
                    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${hero.hitPoints} HP left!`);
                }
                break;
            }
            case 'CastSpell': {
                let manaNeeded = Number(arguments[0]);
                let spellName = arguments[1];

                if (hero.manaPoints >= manaNeeded) {
                    hero.manaPoints -= manaNeeded;
                    console.log(`${name} has successfully cast ${spellName} and now has ${hero.manaPoints} MP!`);
                } else {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                }
                break;
            }
        }

        line = array.shift();
    }
    for (const name in heroes) {
        console.log(`${name}\n  HP: ${heroes[name].hitPoints}\n  MP: ${heroes[name].manaPoints}`);
    }

}
heroesOfCode([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]);