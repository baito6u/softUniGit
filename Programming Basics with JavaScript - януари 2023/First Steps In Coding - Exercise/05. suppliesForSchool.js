function suppliesForSchool(input) {
    let numberOfCemical = Number(input[0]);
    let numberOfMarker = Number(input[1]);
    let litersOfPreparation  = Number(input[2]);
    let percentReduction = Number(input[3]);

    let priceOfCemicals = numberOfCemical * 5.80;
    let priceOfMarkers = numberOfMarker * 7.20;
    let priceOfPreparation = litersOfPreparation * 1.20;

    let priceOfAll = priceOfCemicals + priceOfMarkers + priceOfPreparation;
    let discountedPrice = priceOfAll - (priceOfAll * 0.25);
    
    console.log(discountedPrice);
}


suppliesForSchool(["2","3","4","25"]);