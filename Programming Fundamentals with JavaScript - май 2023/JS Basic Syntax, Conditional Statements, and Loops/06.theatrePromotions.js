function theatrePromotions(typeOfDay, age) {
    price = 0;
    if (age >= 0 && age <= 18) {
        if (typeOfDay == 'Holiday') {
            price = 5;
        } else if (typeOfDay == 'Weekend') {
            price = 15;
        } else if (typeOfDay == 'Weekday') {
            price = 12;
        }
        console.log(`${price}$`);
    } else if (age > 18 && age <= 64) {
        if (typeOfDay == 'Holiday') {
            price = 12;
        } else if (typeOfDay == 'Weekend') {
            price = 20;
        } else if (typeOfDay == 'Weekday') {
            price = 18;
        }
        console.log(`${price}$`);
    } else if (age > 64 && age <= 122) {
        if (typeOfDay == 'Holiday') {
            price = 10;
        } else if (typeOfDay == 'Weekend') {
            price = 15;
        } else if (typeOfDay == 'Weekday') {
            price = 12;
        }
        console.log(`${price}$`);
    } else {
        console.log('Error!');
    }
}

theatrePromotions('Holiday', -12);