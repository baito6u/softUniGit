function heroicInventory(input) {
    let result = [];

    input.forEach(element => {
        let obj = {};
        let heroDataArray = element.split(" / ");
        obj.name = heroDataArray[0];
        obj.level = Number(heroDataArray[1]);
        
        let items = heroDataArray[2];
        obj.items = items ? items.split(", ") : [];

        result.push(obj);
    });

    return JSON.stringify(result);

}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));

//[{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]
