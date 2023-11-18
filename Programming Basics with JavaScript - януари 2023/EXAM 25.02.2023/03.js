function solve(input) {
    let team = input[0];
    let typeOfSouvenirs = input[1];
    let purchaesdSouvenirs = Number(input[2]);

    let price = 0;

    switch (team) {
        case 'Argentina':
            switch (typeOfSouvenirs) {
                case 'flags':
                    price = 3.25;
                    break;
                case 'caps':
                    price = 7.2;
                    break;
                case 'posters':
                    price = 5.1;
                    break;
                case 'stickers':
                    price = 1.25;
                    break;

                default:
                    console.log('Invalid stock!');
                    return;
            }

            break;
        case 'Brazil':
            switch (typeOfSouvenirs) {
                case 'flags':
                    price = 4.2;
                    break;
                case 'caps':
                    price = 8.5;
                    break;
                case 'posters':
                    price = 5.35;
                    break;
                case 'stickers':
                    price = 1;
                    break;

                default:
                    console.log('Invalid stock!');
                    return;
            }
            break;
        case 'Croatia':
            switch (typeOfSouvenirs) {
                case 'flags':
                    price = 2.75;
                    break;
                case 'caps':
                    price = 6.9;
                    break;
                case 'posters':
                    price = 4.95;
                    break;
                case 'stickers':
                    price = 1.1;
                    break;

                default:
                    console.log('Invalid stock!');
                    return;
            }
            break;
        case 'Denmark':
            switch (typeOfSouvenirs) {
                case 'flags':
                    price = 3.1;
                    break;
                case 'caps':
                    price = 6.5;
                    break;
                case 'posters':
                    price = 4.8;
                    break;
                case 'stickers':
                    price = 0.9;
                    break;

                default:
                    console.log('Invalid stock!');
                    return;
            }
            break;

        default:
            console.log('Invalid country!');
            return;
    }
    let total = price * purchaesdSouvenirs;

    console.log(`Pepi bought ${purchaesdSouvenirs} ${typeOfSouvenirs} of ${team} for ${total.toFixed(2)} lv.`);
}

solve(["Argentina",
    "shirts",
    "35"])


