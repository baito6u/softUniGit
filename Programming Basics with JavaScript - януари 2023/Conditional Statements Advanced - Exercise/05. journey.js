function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let typeOfJourney = "";
    let destination = "";

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            typeOfJourney = "Camp";
            budget *= 0.30;
        } else if (season === "winter") {
            typeOfJourney = "Hotel";
            budget *= 0.70;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            typeOfJourney = "Camp";
            budget *= 0.40;
        } else if (season === "winter") {
            typeOfJourney = "Hotel";
            budget *= 0.80;
        }
    } else {
        destination = "Europe";
        typeOfJourney = "Hotel";
        budget *= 0.90;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfJourney} - ${budget.toFixed(2)}`);
}
journey(["1500", "summer"]);