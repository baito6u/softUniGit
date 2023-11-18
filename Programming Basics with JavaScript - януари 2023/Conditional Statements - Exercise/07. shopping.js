function shopping(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ramMemory = Number(input[3]);
    let priceofVideoCards = 250;

    let sumOfVideocards = videoCards * priceofVideoCards;
    let priceOfprocessors = sumOfVideocards * 0.35;
    let sumOfprocessors = processors * priceOfprocessors;
    let priceOframMemory = sumOfVideocards * 0.1;
    let sumOfRamMemory = ramMemory * priceOframMemory;

    let totalSum = sumOfVideocards + sumOfprocessors + sumOfRamMemory;

    if (videoCards > processors) {
        totalSum = totalSum - (totalSum * 0.15);
    } if ( totalSum <= budget) {
        let moneyLeft = budget - totalSum;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalSum - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
}
shopping(["920.45","3","1","1"]);