function numbers(array) {

    let neighborhood = array.shift().split('@');
    let command = array.shift();
    let currentPosition = 0;

    while (command !== 'Love!') {
        let result = command.split(' ');
        currentPosition += Number(result[1]);

        if (currentPosition > neighborhood.length - 1) {
            currentPosition = 0;
        }

        if (neighborhood[currentPosition] === 0) {
            console.log(`Place ${currentPosition} already had Valentine's day.`);
        } else {
            neighborhood[currentPosition] = neighborhood[currentPosition] - 2;
            if (neighborhood[currentPosition] === 0) {
                console.log(`Place ${currentPosition} has Valentine's day.`);
            }
        }
        command = array.shift();
    }

    console.log(`Cupid's last position was ${currentPosition}.`);

    let resultArray = [];
    let resultFlag = true;

    neighborhood.forEach(element => {
        if (element !== 0) {
            resultFlag = false;
            resultArray.push(element)
        }
    });

    if (resultFlag) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${resultArray.length} places.`);
    }
}
numbers(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]);