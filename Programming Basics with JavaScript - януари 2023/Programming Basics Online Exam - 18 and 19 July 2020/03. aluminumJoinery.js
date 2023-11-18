function aluminumJoinery(input) {
    let countOfFrame = Number(input[0]);
    let typeOfFrame = input[1];
    let shipmentType = input[2];

    let price = 0;
    let discount = 0;
    let totalPrice = 0;

    switch (typeOfFrame) {
        case '90X130':
            price = 110;
            if (countOfFrame <= 60) {
                discount = 0.95;
            } else if (countOfFrame > 60) {
                discount = 0.92;
            } break;
        case '100X150':
            price = 140;
            if (countOfFrame <= 80) {
                discount = 0.94;
            } else if (countOfFrame > 80) {
                discount = 0.90;
            } break;
        case '130X180':
            price = 190;
            if (countOfFrame <= 50) {
                discount = 0.93;
            } else if (countOfFrame > 50) {
                discount = 0.88;
            } break;
        case '200X300':
            price = 250;
            if (countOfFrame <= 50) {
                discount = 0.91;
            } else if (countOfFrame > 50) {
                discount = 0.86;
            } break;
    }
    totalPrice = countOfFrame * price;
    let totalPriceWithDiscount = totalPrice * discount;
    if (shipmentType == 'With delivery') {
        totalPriceWithDiscount += 60.00;
    }
    if (countOfFrame >= 99) {
        totalPriceWithDiscount *= 0.96;
    }
    if (countOfFrame < 10) {
        console.log("Invalid order");
    } else {
        console.log(`${totalPriceWithDiscount.toFixed(2)} BGN`);
    }
}
aluminumJoinery(["2",
"130X180",
"With delivery"])