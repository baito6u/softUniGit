function printEveryN(array, num) {

    let output = [];
    
    for (let i = 0; i < array.length; i = i + num) {
        const element = array[i];
        output.push(element);
    }
    return output;
}

console.log(printEveryN(['1',
'2',
'3',
'4',
'5'],
6));