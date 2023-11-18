function sumPrimeNonPrime(input) {
    let primeSum = 0;
    let nonPrimeSum = 0;

    index = 0;

    let command = input[index];
    index++;

    while (command !== "stop") {
        let currentNum = Number(command);

        if (currentNum < 0) {
            console.log("Number is negative.")

            command = input[index];
            index++;

            continue;
        }

        let isPrime = true;

        for (let currentDivisor = 2; currentDivisor < currentNum; currentDivisor++) {
            if (currentNum % currentDivisor === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime == true) {
            primeSum += currentNum;
        } else {
            nonPrimeSum += currentNum;
        }

        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"]);