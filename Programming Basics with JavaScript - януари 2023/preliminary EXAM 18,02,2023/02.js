function deerOfSanta(input) {
    let daysCout = Number(input[0]);
    let totalfoodLeftInKg = Number(input[1]);
    let foodForOneDayFirst = Number(input[2]);
    let foodForOneDaySecond = Number(input[3]);
    let foodForOneDayTird = Number(input[4]);

    let allDaysFirst = foodForOneDayFirst * daysCout;
    let allDaysSecond = foodForOneDaySecond * daysCout;
    let allDaysTird = foodForOneDayTird * daysCout;

    let totalNeededFood = allDaysFirst + allDaysSecond + allDaysTird;

    if (totalNeededFood < totalfoodLeftInKg) {
        console.log(`${Math.floor(totalfoodLeftInKg - totalNeededFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(totalNeededFood - totalfoodLeftInKg)} more kilos of food are needed.`);
    }

}

deerOfSanta(['5', '10', '2.1', '0.8', '11']);