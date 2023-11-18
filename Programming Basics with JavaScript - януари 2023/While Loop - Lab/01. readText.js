function readText(input) {
    let index = 0;

    let str = input[index];
    index++;

    while (str !== 'Stop') {
        console.log(str);

        str = input[index];
        index++;
    }

}
readText(["Sofia",
    "Berlin",
    "Moscow",
    "Athens",
    "Madrid",
    "London",
    "Paris",
    "Stop",
    "AfterStop"])
