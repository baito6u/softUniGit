function timeAndMinutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalTime = (hours * 60) + (minutes + 15);
    let finalHours = Math.floor(totalTime / 60);
    let finalMinutes = totalTime % 60;

    if (finalHours === 24) {
      finalHours = 0;

    } if (finalMinutes < 10) {
      console.log(`${finalHours}:0${finalMinutes}`);
    }else{
    console.log(`${finalHours}:${finalMinutes}`);
    }
}
timeAndMinutes(["12", "49"]);