function pcstore(input) {
    let processorsPrice = Number(input[0]);
    let videoCardPrice = Number(input[1]);
    let ramPrice = Number(input[2]);
    let ramCount = Number(input[3]);
    let discount = Number(input[4]);

    let processorsPriceInLeva = processorsPrice * 1.57;
    let videoCardPriceInLeva = videoCardPrice * 1.57;
    let ramPriceInLeva = ramPrice * 1.57;

    let sumRam = ramPriceInLeva * ramCount;
    let processorsDiscounted = processorsPriceInLeva - (processorsPriceInLeva * discount);
    let videCardDiscouted = videoCardPriceInLeva - (videoCardPriceInLeva * discount);

    let total = processorsDiscounted + videCardDiscouted + sumRam;

    console.log(`Money needed - ${total.toFixed(2)} leva.`);

}
pcstore(['1200', '850', '120', '4', '0.1']);