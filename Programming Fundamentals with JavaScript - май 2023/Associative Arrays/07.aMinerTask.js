function aMinerTask(array) {

    let resources = {};

    for (let index = 0; index < array.length; index += 2) {
        let resource = array[index];
        let quantity = Number(array[index + 1]);

        if (resources[resource]) {
            resources[resource] += quantity;
        } else {
            resources[resource] = quantity;
        }
    }

    for (const resource in resources) {
        console.log(`${resource} -> ${resources[resource]}`);
    }
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);