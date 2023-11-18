function travelAgency(input) {
    let town = input[0];
    let packet = input[1];
    let discount = input[2];
    let days = Number(input[3]);

    if (days < 1) {
        console.log("Days must be positive number!");
        return;
    } else if (days > 7) {
        days -= 1;
    }
    let totalPrice = 0;
    switch (town) {
        case 'Bansko':
        case 'Borovets':
            if (packet === 'withEquipment') {
                totalPrice = 100 * days;
                if (discount === 'yes') {
                    totalPrice *= 0.90;
                }
            } else if (packet === 'noEquipment') {
                totalPrice = 80 * days;
                if (discount === 'yes') {
                    totalPrice *= 0.95;
                }
            } else {
                console.log("Invalid input!");
                return;
            }
            break;

        case 'Varna':
        case 'Burgas':
            if (packet === 'withBreakfast') {
                totalPrice = 130 * days;
                if (discount === 'yes') {
                    totalPrice *= 0.88;
                }
            } else if (packet === 'noBreakfast') {
                totalPrice = 100 * days;
                if (discount === 'yes') {
                    totalPrice *= 0.93;
                }
            } else {
                console.log("Invalid input!");
                return;
            }
            break;
        default: console.log("Invalid input!");
            return;
    }
    console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
}
travelAgency(['Burgas', 'noBreakfast', 'no', '4']);