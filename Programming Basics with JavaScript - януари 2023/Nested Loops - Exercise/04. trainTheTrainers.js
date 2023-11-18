function trainTheTrainers(input) {
    let index = 0;
    let gradesCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let totalGradeSum = 0;
    let presentationCount = 0;

    while (command !== 'Finish') {
        let presentationName = command;
        let gradeSum = 0;

        for (let currGradeCount = 1; currGradeCount <= gradesCount; currGradeCount++) {
            let currGrade = Number(input[index]);
            index++;

            gradeSum += currGrade;
        }

        let avgGrade = gradeSum / gradesCount;
        console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`);

        totalGradeSum += avgGrade;
        presentationCount++;

        command = input[index];
        index++;
    }
    let totalAvgGrade = totalGradeSum / presentationCount;
    console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`);
}


trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);
