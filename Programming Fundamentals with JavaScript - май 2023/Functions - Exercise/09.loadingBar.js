function loadingBar(num) {

    let percentCounter = num / 10;
    let dotsCounter = 10 - percentCounter;

    if (percentCounter === 10) {
        console.log('100% Complete!');
    } else {
        console.log(`${num}% [${'%'.repeat(percentCounter)}${'.'.repeat(dotsCounter)}]`);
        console.log('Still loading...');
    }
}
loadingBar(30);