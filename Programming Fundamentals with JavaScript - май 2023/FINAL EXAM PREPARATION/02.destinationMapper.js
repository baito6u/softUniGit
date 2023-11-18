function destinationMapper(input) {

    let pattern = /[=\/][A-Z][A-za-z]{2,}[=\/]/gm;
    let points = 0;
    let destinations = [];

    let destinationFound = input.match(pattern);

    if (destinationFound) {
        destinationFound.forEach(element => {
            if (element[0] === element[element.length - 1]) {
                element = element.substring(1, element.length - 1);
                destinations.push(element);
                points += element.length;
            }
        });
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}

destinationMapper(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="));