function vacationBooksList(input) {
    let numberOfPages = Number(input[0]);
    let pagesReadInHour = Number(input[1]);
    let numberOfDays = Number(input[2]);

    let totalTimeForABook = numberOfPages / pagesReadInHour;
    let requiredHours = totalTimeForABook / numberOfDays;

    console.log(requiredHours);
}
vacationBooksList(["212","20","2"]);