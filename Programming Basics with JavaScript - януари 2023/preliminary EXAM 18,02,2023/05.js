function excursionSale(input) {
    let countSea = Number(input[0]);
    let countMountain = Number(input[1]);

    let index = 2;
    let command = input[index];
    index++;

    let priceOfSeaPack = 680;
    let priceOfMountainPack = 499;

    let total = 0;


    while (command !== "Stop") {
        switch (command) {
            case 'sea':
                countSea--;
                if (countSea === 0) {
                    continue;
                }
                total += priceOfSeaPack;
                
            break;
            case 'mountain':
            total += priceOfMountainPack
            if (countMountain === 0) {
                break;
            }
            break;
        }
        if (command === 'Stop') {
            break;
        }
        command = input[index];
        index++;
}
console.log(`Profit: ${total} leva.`);
}

excursionSale(['2', '2', 'sea', 'mountain', 'sea', 'sea', 'mountain']);