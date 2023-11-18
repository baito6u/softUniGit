function courierExpress(input) {
    let shipmentWeight = Number(input[0]);
    let typeOfService = input[1];
    let distance = Number(input[2]);

    let price = 0;

    switch (typeOfService) {
        case 'standard':
            if (shipmentWeight < 1) {
                price = 0.03 * distance;
            } else if (shipmentWeight < 10) {
                price = 0.05 * distance;
            } else if (shipmentWeight < 40) {
                price = 0.1 * distance;
            } else if (shipmentWeight < 90) {
                price = 0.15 * distance;
            } else if (shipmentWeight < 150) {
                price = 0.2 * distance;
            }
            break;
        case 'express':
            let overestimation = 0;
            let transportCoast= 0;
            if (shipmentWeight < 1) {
                transportCoast = 0.03 * distance;
                overestimation = ((0.03 * 0.8) * shipmentWeight) * distance;
                price = overestimation + transportCoast;
            } else if (shipmentWeight < 10) {
                transportCoast = 0.05 * distance;
                overestimation = ((0.05 * 0.8) * shipmentWeight) * distance;
                price = overestimation + transportCoast;
            } else if (shipmentWeight < 40) {
                transportCoast = 0.10 * distance;
                overestimation = ((0.10 * 0.5) * shipmentWeight) * distance;
                price = overestimation + transportCoast;
            } else if (shipmentWeight < 90) {
                transportCoast = 0.15 * distance;
                overestimation = ((0.15 * 0.02) * shipmentWeight) * distance;
                price = overestimation + transportCoast;

            } else if (shipmentWeight < 150) {
                transportCoast = 0.20 * distance;
                overestimation = ((0.20 * 0.01) * shipmentWeight) * distance;
                price = overestimation + transportCoast;
            }
        break;
    
        default:
            break;
    }
    console.log(`The delivery of your shipment with weight of ${shipmentWeight.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
}
courierExpress(['87', 'express', '130']);