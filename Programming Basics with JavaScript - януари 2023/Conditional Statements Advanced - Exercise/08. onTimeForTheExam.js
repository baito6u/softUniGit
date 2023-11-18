function onTimeForTheExam(input) {
    /*• The first contains the time of the exam - an integer from 0 to 23.
• The second contains the minute of the exam - an integer from 0 to 59.
• The third contains the arrival time - an integer from 0 to 23.
• The fourth contains the arrival minute - an integer from 0 to 59.
    */
    let hourOfTheExam = Number(input[0]);
    let minutesOfTheExam = Number(input[1]);
    let hourOfArrive = Number(input[2]);
    let arrivelMinute = Number(input[3]);

    let totalTimeofExam = (hourOfTheExam * 60) + minutesOfTheExam;
    let totalTimeOfArrive = (hourOfArrive * 60) + arrivelMinute;
    let difference = Math.abs(totalTimeOfArrive - totalTimeofExam);
    let hourrs = Math.floor(difference / 60);
    let minutes = difference % 60;

    if (totalTimeofExam < totalTimeOfArrive) {
        console.log('Late');
        if (difference < 60) {
            console.log(`${difference} minutes after the start`);
        }
        if (minutes < 10) {
            console.log(`${hourrs}:0${minutes} hours after the start`);
        } else {
            console.log(`${hourrs}:${minutes} hours after the start`);
        }
    } else if (totalTimeOfArrive === totalTimeofExam || totalTimeofExam - totalTimeOfArrive <= 30) {
        console.log('On time');
        if (difference !== 0) {
            console.log(`${difference} minutes before the start`);
        }
    } else {
        console.log('Early');
        if (difference < 60) {
            console.log(`${difference} minutes before the start`);
        } else {
            if (minutes < 10) {
                console.log(`${hourrs}:0${minutes} hours before the start`);
            } else {
                console.log(`${hourrs}:${minutes} hours before the start`);
            }
        }
    }
}
onTimeForTheExam(["9", "00", "10", "30"]);
