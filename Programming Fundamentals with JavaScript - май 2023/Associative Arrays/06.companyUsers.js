function companyUsers(array) {

    let companies = {};

    array.forEach(pair => {
        let [company, id] = pair.split(' -> ');

        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        companies[company].push(id);
    });

    let sortedCompanies = Object.entries(companies);
    sortedCompanies.sort((a, b) => a[0].localeCompare(b[0]));

    for (const element of sortedCompanies) {
        let companyName = element[0];
        console.log(companyName);

        let set = new Set(element[1]);
        for (const idNumber of set) {
            console.log(`-- ${idNumber}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);