// function flightSchedule(array) {
//     let flights = array[0];
//     let newStatuses = array[1];
//     let statusNeeded = array[2];
    
//     let newFlights = {};
    
//     for (const flight of flights) {
//         let [flightNum, destination] = flight.split(' ');

//         newFlights[flightNum] = {
//             Destination: destination,
//             Status: statusNeeded,
//         };
//     }
    
//     for (let newFlight of newFlights) {
//         let [flightNum, status] = newFlight.split(' ');
//         if(newFlights.hasOwnProperty(flightNum)) {
//             newFlights[flightNum].status = status;
//         }
//     }

//     for(let flight in newFlights) {
//         if (newFlights[flight].status === statusNeeded) {
//             console.log(newFlights[flight]);
//         }
//     }
// }

function flightSchedule(input) {
    let flights = {};
    input[0].forEach(line => {
        let [numberFly, destination] = line.split(' ')
        flights[numberFly] = {
            Destination: destination,
            Status: 'Ready to fly'
        }
    });
    input[1].forEach(line => {
        let [numberFly, status] = line.split(' ');
        if (flights.hasOwnProperty(numberFly)) {
            flights[numberFly].Status = status;
        }
    });
    for (let fly in flights) {
        if (flights[fly].Status === String(input[2])) {
            console.log(flights[fly]);
        }
    }
}

flightSchedule([
        ['WN269 Delaware',
            'FL2269 Oregon',
            'WN498 Las Vegas',
            'WN3145 Ohio',
            'WN612 Alabama',
            'WN4010 New York',
            'WN1173 California',
            'DL2120 Texas',
            'KL5744 Illinois',
            'WN678 Pennsylvania'],
        ['DL2120 Cancelled',
            'WN612 Cancelled',
            'WN1173 Cancelled',
            'SK430 Cancelled'],
            ['Cancelled']
    ]);