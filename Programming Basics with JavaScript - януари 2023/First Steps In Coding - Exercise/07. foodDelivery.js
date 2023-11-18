function foodDelivery(input) {
    let chikenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegetarianMenus = Number(input[2]);

    let priceOfChikenMenus = chikenMenus * 10.35;
    let priceOfFishMenus = fishMenus * 12.40;
    let priceOfVegetarianMenus = vegetarianMenus * 8.15;
    let totalPriceOfMenus = priceOfChikenMenus + priceOfFishMenus + priceOfVegetarianMenus;
    let dessertPrice = 0.20 * totalPriceOfMenus;
    let totalOrderPrice = totalPriceOfMenus + dessertPrice + 2.50;

    console.log(totalOrderPrice);
}
foodDelivery(["2","4","3"]);
/*
Price for the chicken menus: 2 pieces * 10.35 = 20.70
Price for fish menus: 4 pieces * 12.40 = 49.60
Price for vegetarian menus: 3 pieces * 8.15 = 24.45
Total price of the menus: 20.70 + 49.60 + 24.45 = 94.75
Dessert price: 20% of 94.75 = 18.95
Delivery price: 2.50 (on condition)
Total order price: 94.75 + 18.95 + 2.50 = 116.20
*/