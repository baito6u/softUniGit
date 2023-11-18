function worldSwimmingRecord(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondsForMeter = Number(input[2]);
    
    let ivanSwim = distanceInMeters * timeInSecondsForMeter;
    let waterDelay = Math.floor(distanceInMeters / 15);
    let  waterResistaice = waterDelay * 12.5;
    let totalTime = ivanSwim + waterResistaice;

    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let insufficientTime = totalTime - recordInSeconds;
        console.log(`No, he failed! He was ${insufficientTime.toFixed(2)} seconds slower.`)
    }
}
worldSwimmingRecord(["55555.67","3017","5.03"]);

// 1.	Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
// 2.	Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
// 3.	Времето в секунди, за което плува разстояние от 1 м. - реално число
