function sumNumbers(input) {
    let index = 0;

    let num = input[index];
    index++;
    let sum = Number(input[index]);
    index++;

    while (sum < num) {
        sum += Number(input[index]);
        index++
    }
    console.log(sum);
}
sumNumbers(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])
    ;