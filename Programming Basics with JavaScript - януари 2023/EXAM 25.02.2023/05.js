function solve(input) {
    let foodKg = Number(input[0]);
    let foodGr = foodKg * 1000;

    let index = 1;
    let command = input[index];
    index++;

    let eatedFood = 0;

    while (command != 'Adopted') {
        let daily = Number(command);
        eatedFood += daily;

        command = input[index];
        index++;
    }
    if (eatedFood <= foodGr) {
        console.log(`Food is enough! Leftovers: ${(foodGr - eatedFood)} grams.`);
    } else {
        console.log(`Food is not enough. You need ${(eatedFood - foodGr)} grams more.`);
    }
}

solve(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])

