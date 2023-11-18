function graduation(input) {
    let index = 0;

    let name = input[index];
    index++;

    let grade = Number(input[index]);
    index++;
    let klass = 1;
    let sumGrade = 0;

    let badGradeCount = 0;

    let hasBeenExcluded = false;

    while (klass <= 12) {
        if (grade < 4.00) {
            badGradeCount++;
            if (badGradeCount === 2) {
                hasBeenExcluded = true;
                break;
            }
            grade = Number(input[index]);
            index++;
            continue;
        }
        klass++;
        sumGrade += grade;
        grade = Number(input[index]);
        index++;
    }
    if (hasBeenExcluded) {
        console.log(`${name} has been excluded at ${klass} grade`);

    } else {
        console.log(`${name} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`);
    }
}
graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])

