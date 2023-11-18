function movingTarget(array) {
    let targets = array.shift().split(' ').map(Number);

    let index = 0;
    let command = array[index];
    index++;

    while (command !== 'End') {
        let newArray = command.split(' ');
        let newIndex = Number(newArray[1]);
        switch (newArray[0]) {
            case 'Shoot':
                let power = Number(newArray[2]);

                if (newIndex >= 0 && newIndex < targets.length) {
                    targets[newIndex] -= power;

                    if (targets[newIndex] <= 0) {
                        targets.splice(newIndex, 1);
                    }
                }
                break;
            case 'Add':
                let value = Number(newArray[2]);

                if (newIndex >= 0 && newIndex < targets.length) {
                    targets.splice(newIndex, 0, value);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                let radius = Number(newArray[2]);

                if(newIndex - radius >= 0 && radius + newIndex < targets.length) {
                    targets.splice(newIndex - radius, radius * 2 + 1);
                } else {
                    console.log('Strike missed!');
                }
                break;
        }
        command = array[index];
        index++;
    }
    console.log(targets.join('|'));
}

movingTarget((["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]));