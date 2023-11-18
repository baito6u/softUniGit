function worldTour(array) {

    allStops = array.shift();

    let line = array.shift();

    while (line !== 'Travel') {
        let currentLine = line.split(':');
        let command = currentLine.shift();

        switch (command) {
            case 'Add Stop':
                let index = Number(currentLine[0]);
                let stringGiven = currentLine[1];

                if (index >= 0 && index < allStops.length) {

                    //allStops = allStops.slice(0, index) + stringGiven + allStops.slice(index);
                    allStops = allStops.split('');
                    allStops.splice(index, 0, stringGiven);
                    allStops = allStops.join('');

                }
                console.log(allStops);
                break;

            case 'Remove Stop':
                let startIndex = Number(currentLine[0]);
                let endIndex = Number(currentLine[1]);
                let removedPart = allStops.substring(startIndex, endIndex + 1);

                if ((startIndex >= 0 && startIndex < allStops.length) && (endIndex >= 0 && endIndex < allStops.length)) { //startIndex >= 0 && startIndex < endIndex && endIndex < allStops.length
                    allStops = allStops.replace(removedPart, '');
                }
                console.log(allStops);
                break;

            case 'Switch':
                let oldString = currentLine[0];
                let newString = currentLine[1];
                if (allStops.includes(oldString)) {
                    let splitted = allStops.split(oldString);
                    allStops = splitted.join(newString);
                }
                console.log(allStops);
                break;

        }

        line = array.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${allStops}`);
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);