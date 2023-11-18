function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let percentage = Number(input[3]);
    let volume = lenght * width * hight;
    let volumeInLiters = volume * 0.001;
    let occupiedSpace = percentage / 100;
    let LiterNeeded = volumeInLiters * (1 - occupiedSpace);
console.log(LiterNeeded);
}
fishTank(["85","75","47","17"]);