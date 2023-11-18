function softUniBarIncome(array) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>[\d]+.?\d*)\$/g;
    let i = 0;
    let currentLine = array[i];
    let result = 0;

    while (currentLine !== 'end of shift') {

        let matches = [...currentLine.matchAll(pattern)];

        for (const el of matches) {
            let prices = Number(el.groups.price) * Number(el.groups.quantity);
            result += prices;

            console.log(`${el.groups.name}: ${el.groups.product} - ${prices.toFixed(2)}`);
        }
        i++;
        currentLine = array[i];
    }
    console.log(`Total income: ${result.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);