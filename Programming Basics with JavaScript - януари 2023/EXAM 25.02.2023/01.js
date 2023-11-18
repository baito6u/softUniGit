function solve(input) {
    let countPaint = Number(input[0]);
    let countWallpaper = Number(input[1]);
    let priceGloves = Number(input[2]);
    let priceOfBrush = Number(input[3]);

    let paintCosts = countPaint * 21.5;
    let WallpaperCosts = countWallpaper * 5.2;
    let countOfGoleves = Math.ceil(countWallpaper * 0.35);
    let countBrushes = Math.floor(countPaint * 0.48);
    let totalGlovesPrice = countOfGoleves * priceGloves;
    let totalPriceBrushes = countBrushes * priceOfBrush;

    let total = paintCosts + WallpaperCosts + totalGlovesPrice + totalPriceBrushes;

    let delivery = (1 / 15) * total;

    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);

}

solve(['10', '8', '2.2', '5'])