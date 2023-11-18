function repainting(input) {
    let nylonQuantity = Number(input[0]);
    let paintQuantity = Number(input[1]);
    let tinnerQuantity = Number(input[2]);
    let workTime = Number(input[3]);

    let totalNylonQuantity = nylonQuantity + 2;
    let nylonPrice = totalNylonQuantity * 1.5;
    let additionallyPaintQuantity = 0.1 * paintQuantity;
    let totalPaintQuantity = paintQuantity + additionallyPaintQuantity;
    let paintPrice = totalPaintQuantity * 14.5;
    let tinnerPrice = tinnerQuantity * 5;
    let totalPriceOfMaterials = nylonPrice + paintPrice + tinnerPrice + 0.40;
    let coastsForWorkers = (0.3 * totalPriceOfMaterials) * workTime;
    let totalCoasts = totalPriceOfMaterials + coastsForWorkers;

    console.log(totalCoasts);
}
repainting(["5","10","10","1"]);