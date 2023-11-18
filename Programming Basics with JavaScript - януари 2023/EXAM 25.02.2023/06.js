function solve(input) {
    let location = Number(input[0]);

    let index = 1;

    for (let currLoc = 0; currLoc < location; currLoc++) {
        let expectedYeald = Number(input[index]);
        index++;
        let days = Number(input[index]);
        index++;
        let yield = 0;
        for (let currDay = 0; currDay < days; currDay++) {
            let currYeald = Number(input[index]);
            index++;
            yield += currYeald;
        }
        let averageYeald = yield / days;

        if (averageYeald < expectedYeald) {
            console.log(`You need ${(expectedYeald - averageYeald).toFixed(2)} gold.`);
        } else {
            console.log(`Good job! Average gold per day: ${averageYeald.toFixed(2)}.`);
        }
    }
}

solve(["1",
    "5",
    "3",
    "10",
    "1",
    "3"])
    ;