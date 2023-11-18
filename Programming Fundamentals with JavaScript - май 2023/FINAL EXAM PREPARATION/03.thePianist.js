function thePianist(input) {

    let numOfPieces = Number(input.shift());

    let list = {};

    for (let index = 0; index < numOfPieces; index++) {
        let line = input.shift();
        let [pieceName, composer, key] = line.split('|');

        list[pieceName] = {
            composer: composer,
            key: key,
        };
    }

    let line = input.shift();

    while (line !== 'Stop') {

        let [command, ...tokens] = line.split('|');
        let piece = tokens[0];

        switch (command) {
            case 'Add': {
                let composer = tokens[1];
                let key = tokens[2];
                if (list[piece] != undefined) {
                    console.log(`${piece} is already in the collection!`)
                } else {
                    list[piece] = {
                        composer: composer,
                        key: key
                    };
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                }
                break;
            }
            case 'Remove': {
                if (list.hasOwnProperty(piece)) {
                    delete list[piece];
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            }
            case 'ChangeKey': {
                let newKey = tokens[1];
                let oldKey = list[piece].key;
                if (list.hasOwnProperty(piece)) {
                    list[piece].key = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            }
            
        }

        line = input.shift();
    }

    for (const piece in list) {
        console.log(`${piece} -> Composer: ${list[piece].composer}, Key: ${list[piece].key}`);
    }

}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);