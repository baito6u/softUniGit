function poolDay(input) {
    let countOfPeople = Number(input[0]);
    let entransTax = Number(input[1]);
    let pricePerChair = Number(input[2]);
    let pricePerUmbrella = Number(input[3]);

    let toatlEntransTax = countOfPeople * entransTax;
    let allChairsTaken = Math.ceil(countOfPeople * 0.75);
    let totalPriceForChairs = allChairsTaken * pricePerChair;
    let allUmbrellaTaken = Math.ceil(countOfPeople / 2)
    let totalPriceForUmbrella = allUmbrellaTaken * pricePerUmbrella;

    let total = toatlEntransTax + totalPriceForChairs + totalPriceForUmbrella;
    
    console.log(`${total.toFixed(2)} lv.`);
}

poolDay(['21', '5.50', '4.40', '6.20']);