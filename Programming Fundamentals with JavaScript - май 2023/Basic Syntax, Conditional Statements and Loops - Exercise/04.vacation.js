function vacation(group, typeOfGroup, dayOfWeek) {
    let price = 0;
    let sum = 0;

    switch (dayOfWeek) {
        case 'Sunday':
            switch (typeOfGroup) {
                case 'Students':
                    price = 10.46;
                    sum = group * price;
                    if (group >= 30) {
                        sum = (group * price) * 0.85;
                    }
                    break;

                case 'Business':
                    price = 16;
                    sum = group * price;
                    if (group >= 100) {
                        sum = (group * price) - (10 * price);
                    }
                    break;

                case 'Regular':
                    price = 22.50;
                    sum = group * price;
                    if (group >= 10 && group <= 20) {
                        sum = (group * price) * 0.95;
                    }
                    break;
            }
            break;
        case 'Saturday':
            switch (typeOfGroup) {
                case 'Students':
                    price = 9.80;
                    sum = group * price;
                    if (group >= 30) {
                        sum = (group * price) * 0.85;
                    }
                    break;

                case 'Business':
                    price = 15.60;
                    sum = group * price;
                    if (group >= 100) {
                        sum = (group * price) - (10 * price);
                    }
                    break;

                case 'Regular':
                    price = 20;
                    sum = group * price;
                    if (group >= 10 && group <= 20) {
                        sum = (group * price) * 0.95;
                    }
                    break;
            }
            break;
        case 'Friday':
            switch (typeOfGroup) {
                case 'Students':
                    price = 8.45;
                    sum = group * price;
                    if (group >= 30) {
                        sum = (group * price) * 0.85;
                    }
                    break;

                case 'Business':
                    price = 10.9;
                    sum = group * price;
                    if (group >= 100) {
                        sum = (group * price) - (10 * price);
                    }
                    break;

                case 'Regular':
                    price = 15;
                    sum = group * price;
                    if (group >= 10 && group <= 20) {
                        sum = (group * price) * 0.95;
                    }
                    break;
            }
            break;
    }

    console.log(`Total price: ${sum.toFixed(2)}`);
}

vacation(40,
    "Regular",
    "Saturday"
);