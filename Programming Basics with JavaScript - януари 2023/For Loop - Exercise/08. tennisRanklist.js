function tennisRanklist(input) {
    let tournamentCount = Number(input[0]);
    let startPoints = Number(input[1]);

    let pointsWon = 0;
    let tournamentWon = 0;

    for ( let i = 2; i < tournamentCount + 1; i++) {
        let curResult = input[i];
        
        if (curResult === 'W') {
            pointsWon += 2000;
            tournamentWon++;
        } else if (curResult === 'F') {
            pointsWon += 1200;
        } else {
            pointsWon += 720;
        }
    }
    let totalPoints = startPoints + pointsWon;
    let averagePoints = Math.floor(pointsWon / tournamentCount);
    let tournamentPercentWon = (tournamentWon / tournamentCount) * 100;


    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${tournamentPercentWon.toFixed(2)}%`);
}

tennisRanklist(["5","1400","F","SF","W","W","SF"]);
