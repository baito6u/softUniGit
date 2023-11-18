function agencyProfit(input) {
    let nameOfTheAirlane = input[0];
    let numOfTicketsOfAdults = Number(input[1]);
    let numOfTicketsOfChildren = Number(input[2]);
    let netPriceOfTicket = Number(input[3]);
    let costOfServiceCharge = Number(input[4]);

    let netPriceOfCildrenTicket = netPriceOfTicket * 0.3;
    let priceOfAdultPlusService = netPriceOfTicket + costOfServiceCharge;
    let priceOfChildrenPlusService = netPriceOfCildrenTicket + costOfServiceCharge;

    let totalTicketsSum = (numOfTicketsOfAdults * priceOfAdultPlusService) + (numOfTicketsOfChildren * priceOfChildrenPlusService);
    let profit = totalTicketsSum * 0.2;

    console.log(`The profit of your agency from ${nameOfTheAirlane} tickets is ${profit.toFixed(2)} lv.`);

}

agencyProfit(['WizzAir', '15', '5', '120', '40']);