function circleArea(input) {

    let inputType = typeof (input);

    if (inputType === `number`) {
        let result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}
circleArea(5);
//78.54
circleArea('name');
//We can not calculate the circle area, because we receive a string.