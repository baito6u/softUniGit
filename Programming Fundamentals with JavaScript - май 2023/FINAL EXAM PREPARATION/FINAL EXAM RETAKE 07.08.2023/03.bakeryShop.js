function bakeryShop(array) {

    let allFood = 0;
    let soldFood = 0;

    let shop = {};

    let lines = array.shift();

    while (lines !== 'Complete') {
        let [comand, quantity, food] = lines.split(' ');
        quantity = Number(quantity);
        switch (comand) {
            case 'Receive': {
                if (quantity <= 0) {
                    break;
                }
                if (!shop.hasOwnProperty(food)) {
                    shop[food] = Number(quantity);
                    allFood++;
                } else {
                    shop[food] += Number(quantity);
                }

                break;
            }
            case 'Sell': {
                if (!shop.hasOwnProperty(food)) {
                    console.log(`You do not have any ${food}.`);
                } else {
                    let lastQuantity = shop[food] - quantity;

                    if (lastQuantity < 0) {
                        console.log(`There aren't enough ${food}. You sold the last ${shop[food]} of them.`);
                        soldFood += shop[food];
                        delete shop[food];
                    } else if (lastQuantity == 0) {
                        shop[food] -= quantity;
                        console.log(`You sold ${quantity} ${food}.`);
                        soldFood += quantity;
                        delete shop[food];
                    } else {
                        console.log(`You sold ${quantity} ${food}.`);
                        shop[food] -= quantity;
                        soldFood += quantity;
                    }
                }
                break;
            }

        }

        lines = array.shift();
    }

    for (let key in shop) {
        console.log(`${key}: ${shop[key]}`);
    }
    console.log(`All sold: ${soldFood} goods`);
}

bakeryShop(["Receive 105 cookies",
    "Receive 10 donuts",
    "Sell 10 donuts",
    "Sell 1 bread",
    "Complete"]);