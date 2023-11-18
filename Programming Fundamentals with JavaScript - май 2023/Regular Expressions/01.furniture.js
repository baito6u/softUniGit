function furniture(array) {

    let pattern = />>(?<name>\w+)<<(?<price>\d+\.?\d+)!(?<quantity>\d*)/g;

    let sum = 0;
    //console.log('Bought furniture:');
    for (let line of array) {
        let matches = line.match(pattern);
        console.log(matches);

        if (matches) {
            let name = matches.groups.name;
            let price = Number(matches.groups.price);
            let quantity = Number(matches.groups.quantity);
            sum += price * quantity

            console.log(name);
        }
    }

    //console.log(`Total money spend: ${sum.toFixed(2)}`);

}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);