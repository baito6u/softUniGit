function train(array) {

    let wagons = array[0].split(' ').map(Number);
    let wagonCapacity = Number(array[1]);

    for (let index = 2; index < array.length; index++) {
        let command = array[index].split(' ');

        if (command[0] === 'Add') {
            wagons.push(Number(command[1]));
        } else {
            let passengers = Number(command[0]);

            for (let currWagon = 0; currWagon < wagons.length; currWagon++) {
                if (wagonCapacity - wagons[currWagon] >= passengers) {
                    wagons[currWagon] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);