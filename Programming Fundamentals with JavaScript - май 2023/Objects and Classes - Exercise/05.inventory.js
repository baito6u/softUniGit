function inventory(array) {

    let heros = [];

    for (let index of array) {
        let [heroName, heroLevel, items] = index.split(' / ');

        let hero = {
            name: heroName,
            level: Number(heroLevel),
            items: items,
        };

        heros.push(hero);
    }

    heros.sort((a, b) => a.level - b.level);

    for (const heroObj of heros) {
        console.log(`Hero: ${heroObj.name}`);
        console.log(`level => ${heroObj.level}`);
        console.log(`items => ${heroObj.items}`);
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);