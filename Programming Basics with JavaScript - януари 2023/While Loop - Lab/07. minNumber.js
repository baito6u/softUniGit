function minNumber(input) {
    let index = 0;

    let command = input[index];
    index++;

    let myMinNum = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);
        if (myMinNum > num) {
            myMinNum = num;
        }
        command = input[index];
        index++;
    }
    console.log(myMinNum);
}

minNumber(["45",
    "-20",
    "7",
    "99",
    "Stop"])


