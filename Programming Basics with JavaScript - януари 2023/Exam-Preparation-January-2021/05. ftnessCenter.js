function ftnessCenter(input) {
    let count = Number(input[0]);
    let activity = input[1];

    let backCount = 0;
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;
    let proteinShakeCount = 0;
    let proteinBarCount = 0;

    let workOutCount = 0;
    let proteinCount = 0;

    for (let i = 1; i <= count; i++) {
        activity = input[i];
        if (activity === 'Back') {
            backCount++;
            workOutCount++;
        } else if (activity === 'Chest') {
            chestCount++;
            workOutCount++;
        } else if (activity === 'Legs') {
            legsCount++;
            workOutCount++;
        } else if (activity === 'Abs') {
            absCount++;
            workOutCount++;
        } else if (activity === 'Protein shake') {
            proteinShakeCount++;
            proteinCount++;
        } else if (activity === 'Protein bar') {
            proteinBarCount++;
            proteinCount++;
        }
    }
    console.log(`${backCount} - back`);
    console.log(`${chestCount} - chest`);
    console.log(`${legsCount} - legs`);
    console.log(`${absCount} - abs`);
    console.log(`${proteinShakeCount} - protein shake`);
    console.log(`${proteinBarCount} - protein bar`);

    let percentWorckOut = (workOutCount / count) * 100;
    let percentProtein = (proteinCount / count) * 100;

    console.log(`${percentWorckOut.toFixed(2)}% - work out`);
    console.log(`${percentProtein.toFixed(2)}% - protein`);
}

ftnessCenter([
    '10', 'Back',
    'Chest', 'Legs',
    'Abs', 'Protein shake',
    'Protein bar', 'Protein shake',
    'Protein bar', 'Legs',
    'Abs', ''
]);