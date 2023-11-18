function listOfNames(array) {

    let sortedArray = array.sort((a,b) => a.localeCompare(b));

    sortedArray.forEach((name, index) => console.log(`${index + 1}.${name}`));

    //let map = sortedArray.map((name, index) => console.log(`${index + 1}.${name}`))
}

listOfNames(["John", "Bob", "Christina", "Ema"]);