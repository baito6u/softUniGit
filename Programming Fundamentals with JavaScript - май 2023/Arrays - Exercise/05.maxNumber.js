// function maxNumber(array) {
//     let element = 0;
//     let nextElement = 0;
//     let result = '';
//     for (let i = 1; i < array.length; i++) {
//         element = Number(array[i]);
//         nextElement = Number(array[i + 1]);
//         if (element > nextElement) {
//             result += `${element} `
//         }
//     }
//     result += `${element} `

//     console.log(result);
// }
// maxNumber([14, 24, 3, 19, 15, 17]);

function maxNumber(array) {
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let isBigger = true;
        let element = array[i];

        for (let j = i + 1; j < array.length; j++) {
            if (element <= array[j]) {
                isBigger = false;
            }
        }
        if (isBigger) {
            resultArray.push(array[i]);
        }
    }
    console.log(resultArray.join(' '));
}
maxNumber([14, 24, 3, 19, 15, 17]);