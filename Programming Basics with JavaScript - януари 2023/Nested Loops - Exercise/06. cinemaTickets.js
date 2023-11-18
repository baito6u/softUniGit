function cinemaTickets(input) {
    let index = 0;

    let movieTitle = input[index];
    index++;

    let standardTicketCount = 0;
    let studentTicketCount = 0;
    let kidTicketCount = 0;

    while (movieTitle !== "Finish") {
        let spacesAvailable = Number(input[index]);
        index++;

        let currentTicket = input[index];
        index++;

        let spacesTaken = 0;

        while (currentTicket !== "End") {
            if (currentTicket === "standard") {
                standardTicketCount++;
            } else if (currentTicket === "student") {
                studentTicketCount++;
            } else {
                kidTicketCount++;
            }
            spacesTaken++;

            if (spacesTaken === spacesAvailable) {
                break;
            }

            currentTicket = input[index];
            index++;
        }

        let percentFull = (spacesTaken / spacesAvailable) * 100;
        console.log(`${movieTitle} - ${percentFull.toFixed(2)}% full.`);

        movieTitle = input[index];
        index++;
    }

    let totalTickets = studentTicketCount + standardTicketCount + kidTicketCount;
    console.log(`Total tickets: ${totalTickets}`);

    let standartPercent = (standardTicketCount / totalTickets) * 100;
    let studentPercent = (studentTicketCount / totalTickets) * 100;
    let kidtPercent = (kidTicketCount / totalTickets) * 100;

    console.log(`${studentPercent.toFixed(2)}% student tickets.`);
    console.log(`${standartPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidtPercent.toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);