function salary(input) {
    let openTabs = Number(input[0]);
    let salaryPerMonth = Number(input[1]);

    let penalty = 0;

    for ( let i = 2; i < input.length; i++) {
        let openPage = input[i];
        if (openPage === "Facebook" ) {
            penalty += 150;
        } else if (openPage === "Instagram") {
            penalty += 100;
        } else if (openPage === "Reddit") {
            penalty += 50;
        }
    }
    if (penalty >= salaryPerMonth) {
        console.log("You have lost your salary.");
    } else {
        console.log(salaryPerMonth - penalty);
    }
}

salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])
;