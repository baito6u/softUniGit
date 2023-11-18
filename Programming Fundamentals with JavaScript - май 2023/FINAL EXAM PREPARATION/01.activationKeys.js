function activationKeys(input) {

    let rawActivationKey = input.shift();
    let commands = input.slice();

    for (const line of input) {
        let currentLine = line.split('>>>');
        let command = currentLine[0];
        let startIndex = 0;
        let endIndex = 0;

        if (command === "Contains") {
            let substring = currentLine[1];

            if (rawActivationKey.includes(substring)) {
                console.log(`${rawActivationKey} contains ${substring}.`);
            } else {
                console.log("Substring not found!");
            }

        } else if (command === "Flip") {
            let upperOrLower = currentLine[1];
            startIndex = Number(currentLine[2]);
            endIndex = Number(currentLine[3]);

            let part = rawActivationKey.substring(startIndex, endIndex);
            let newPart = upperOrLower === "Upper" ? part.toUpperCase() : part.toLowerCase();

            rawActivationKey = rawActivationKey.replace(part, newPart);
            console.log(rawActivationKey);

        } else if (command == "Slice") {
            startIndex = Number(currentLine[1]);
            endIndex = Number(currentLine[2]);

            let slicedPart = rawActivationKey.substring(startIndex, endIndex);
            rawActivationKey = rawActivationKey.replace(slicedPart, '');
            console.log(rawActivationKey);

        } else if (command === "Generate") {
            break;
        }
    }
    console.log(`Your activation key is: ${rawActivationKey}`);
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);