function sumSeconds(input) {
    let time1 = Number(input[0]);
    let time2 = Number(input[1]);
    let time3 = Number(input[2]);

    let totalTime = time1 + time2 + time3;
    let mins = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${mins}:0${seconds}`);
    } else {
        console.log(`${mins}:${seconds}`);
    }
}
sumSeconds(["22", "7", "34"]);