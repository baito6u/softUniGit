function fancyBarcodes(array) {

    let numberOfOperations = Number(array.shift());

    for (let i = 0; i < numberOfOperations; i++) {

        let pattern = /(^@#{1,})(?<word>[A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/g.exec(array[i])

        if (pattern) {
            
            let word = pattern.groups.word

            let numbers = word.match(/\d/g)
            if (numbers != null) {
                let productGroup = numbers.join('');
                console.log(`Product group: ${productGroup}`);
            }else{
                console.log(`Product group: 00`);
            }
        }else{
            console.log(`Invalid barcode`);     
        }
    }
}
fancyBarcodes((["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]));