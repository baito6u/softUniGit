function storage(array) {

    let storageAsObj = new Map();

    array.forEach(line => {
        let [item, quantity] = line.split(' ');
        if (storageAsObj.has(item)) {
            storageAsObj[item] += Number(quantity);
        } else {
            storageAsObj[item] = Number(quantity);
        }
    });
    console.log(storageAsObj);
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);