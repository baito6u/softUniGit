function exam(input) {
    let studentCount = Number(input[0]);

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    
    let average = 0

    for (let i = 1; i <= studentCount; i++) {
        let grade = Number(input[i]);
        average += grade;

        if (grade < 3) {
            group1++;
        } else if (grade < 4) {
            group2++;
        } else if (grade < 5) {
            group3++;
        } else if (grade >= 5) {
            group4++;
        }
    }
    let percent1 = (group1 / studentCount) * 100;
    let percent2 = (group2 / studentCount) * 100;
    let percent3 = (group3 / studentCount) * 100;
    let percent4 = (group4 / studentCount) * 100;

    let totalAverage = (average / studentCount);

    console.log(`Top students: ${percent4.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percent3.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percent2.toFixed(2)}%`);
    console.log(`Fail: ${percent1.toFixed(2)}%`);
    console.log(`Average: ${totalAverage.toFixed(2)}`);
}

exam([
    '6', '2', '3',
    '4', '5', '6',
    '2.2'
]);