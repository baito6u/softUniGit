function maxNumber(input) {
    let index = 0;
    let command = input[index];
    index++;

    let myMaxnum = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);

        if (myMaxnum < num) {
            myMaxnum = num;
        }

        command = input[index];
        index++;
    }
    console.log(myMaxnum);
}

maxNumber(["45",
    "-20",
    "7",
    "99",
    "Stop"])
    ;