function examPreparation(input) {
    let index = 0;

    let maxPoorgrades = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let grade = Number(input[index]);
    index++;

    let poorGradeCount = 0;
    let gradesCount = 0;
    let gradesSum = 0;
    let lastProblem = '';

    while (command !== 'Enough') {
        lastProblem = command;

        if (grade <= 4) {
            poorGradeCount++;
        }
        if (poorGradeCount === maxPoorgrades) {
            console.log(`You need a break, ${poorGradeCount} poor grades.`);
            return;
        }

        gradesCount++;
        gradesSum += grade;

        command = input[index];
        index++;

        grade = Number(input[index]);
        index++;
    }

    let avgGrade = gradesSum / gradesCount;

    console.log(`Average score: ${avgGrade.toFixed(2)}`);
    console.log(`Number of problems: ${gradesCount}`);
    console.log(`Last problem: ${lastProblem}`);
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
