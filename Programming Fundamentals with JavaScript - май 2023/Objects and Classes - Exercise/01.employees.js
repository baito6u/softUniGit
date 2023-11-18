function employees(array) {

    let employeesObj = {};

    for (const index of array) {
        employeesObj[index] = index.length;
    }

    for (const employeeName in employeesObj) {
        console.log(`Name: ${employeeName} -- Personal Number: ${employeesObj[employeeName]}`);
    }
}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);

