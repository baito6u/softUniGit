function softUniReception(array) {
    let firstEmployeeEfficiency = Number(array[0]);
    let secondEmployeeEfficiency = Number(array[1]);
    let thirdEmployeeEfficiency = Number(array[2]);
    let studentsCount = Number(array[3]);

    let totalEmployeeEfficiencyPerHour = firstEmployeeEfficiency + secondEmployeeEfficiency + thirdEmployeeEfficiency;
    let neededTime = 0;

    while (studentsCount > 0) {
        neededTime++;
        studentsCount -= totalEmployeeEfficiencyPerHour;
        if (neededTime % 4 == 0) {
            neededTime++;
        }
    }
    console.log(`Time needed: ${neededTime}h.`);
}

softUniReception(['5', '6', '4', '20']);
softUniReception(['1', '2', '3', '45']);
softUniReception(['3', '2', '5', '40']);
