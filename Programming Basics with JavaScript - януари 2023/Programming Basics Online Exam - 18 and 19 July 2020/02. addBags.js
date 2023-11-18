function addBags(input) {
    let priceOfLuggageOver = Number(input[0])
    let weightOfLuggage = Number(input[1]);
    let days = Number(input[2]);
    let numOfLugage = Number(input[3]);

    let priceofLuggage = 0;

    if (weightOfLuggage <= 9) {
        priceofLuggage = priceOfLuggageOver * 0.2;
    } else if (weightOfLuggage <= 20) {
        priceofLuggage = priceOfLuggageOver * 0.5;
    } else {
        priceofLuggage = priceOfLuggageOver;
    }

    if (days < 7) {
        priceofLuggage *= 1.4;
    } else if (days <= 30) {
        priceofLuggage *= 1.15;
    } else {
        priceofLuggage *= 1.10;
    }

    let totalpriceOfLuggagge = numOfLugage * priceofLuggage;

    console.log(`The total price of bags is: ${totalpriceOfLuggagge.toFixed(2)} lv.`);
}

addBags(['63.80', '23', '3', '1']);