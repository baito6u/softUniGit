function club(input) {
    let profit = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;

    let check = 0;
    let total = 0;

    while (command !== 'Party!') {
        let price = command.length;
        let count = Number(input[index]);
        index++;

        check = price * count;

        if (check % 2 !== 0) {
            check *= 0.75;
        }
        total += check;

        if (total >= profit) {
            console.log("Target acquired.");
            console.log(`Club income - ${total.toFixed(2)} leva.`);
            break;
        }

        command = input[index];
        index++;

    }
        if (command == 'Party!') {
            console.log(`We need ${(profit - total).toFixed(2)} leva more.`);
            console.log(`Club income - ${total.toFixed(2)} leva.`);
        }
}

club(['100', 'Sidecar', '7', 'Mojito', '5', 'White Russian', '10']);