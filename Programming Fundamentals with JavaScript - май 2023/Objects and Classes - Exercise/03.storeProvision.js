function storeProvision(currentStock, stockForDelivery) {

    let localStore = {};

    for (let index = 0; index < currentStock.length; index += 2) {
        let product = currentStock[index];
        let quantity = Number(currentStock[index + 1]);

        localStore[product] = quantity;

    }

    for (let index = 0; index < stockForDelivery.length; index += 2) {
        let product = stockForDelivery[index];
        let quantity = Number(stockForDelivery[index + 1]);

        if (!localStore.hasOwnProperty(product)) {
            localStore[product] = 0;
        }
        localStore[product] += quantity;
    }

    for (const productKey in localStore) {
        console.log(`${productKey} -> ${localStore[productKey]}`);
    }

}
storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);