function makeADictionary(arr) {
    let copy = [];
    let obj = {};

    for (let element of arr) {
        let converted = JSON.parse(element);
        if (typeof converted === 'object') {
            for (let key in converted) {
                obj[key] = converted[key];
            }
        }

    }
    for (let key in obj) {
        copy.push(`Term: ${key} => Definition: ${obj[key]}`);

    }
    console.log(copy.sort().join('\n'));

    // let array = arr.reduce((acc, curr) => {
    //     let term = Object.keys(JSON.parse(curr))[0];
    //     let text = Object.values(JSON.parse(curr))[0];
    //     acc.push({ [term]: text });

    //     return acc;
    // }, []);

    // let copy = array
    //     .sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))
    //     .map((el) => {
    //         return `Term: ${Object.keys(el)[0]} => Definition: ${Object.values(el)[0]}`;
    //     })
    //     .join('\n');

    // return copy;
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);