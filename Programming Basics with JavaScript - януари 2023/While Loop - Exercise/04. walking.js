function walking(input) {
    let goalSteps = 10000;
    let stepsCounter = 0;

    let index = 0;

    while (true) {
        let command = input[index];
        index++;

        if (command == "Going home") {
            let stepsAfeterGoingHome = Number(input[index]);
            stepsCounter += stepsAfeterGoingHome;
            if (stepsCounter < goalSteps) {
                console.log(`${goalSteps - stepsCounter} more steps to reach goal.`);
            } else {
                console.log("Goal reached! Good job!");
                console.log(`${stepsCounter - goalSteps} steps over the goal!`);
            }
            break;
        }
        let steps = Number(command);    // вместо създаването на нова променлива:
        stepsCounter += steps;          // stepsCounter += Number(command);

        if (stepsCounter >= goalSteps) {
            console.log("Goal reached! Good job!");
            console.log(`${stepsCounter - goalSteps} steps over the goal!`);
            break;
        }
    }
}

walking(["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"])

