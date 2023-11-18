function trekkingMania(input) {
    numOfGroups = Number(input[0]);

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;


    for (let i = 1; i <= numOfGroups; i++) {
        let peopleInOneGroup = Number(input[i]);

        if (peopleInOneGroup <= 5) {
            group1 += peopleInOneGroup;
        } else if (peopleInOneGroup <= 12) {
            group2 += peopleInOneGroup;
        } else if (peopleInOneGroup <= 25) {
            group3 += peopleInOneGroup;
        } else if (peopleInOneGroup <= 40) {
            group4 += peopleInOneGroup;
        } else if (peopleInOneGroup >= 41) {
            group5 += peopleInOneGroup;
        }
    }

    let peopleCounter = group1 + group2 + group3 + group4 + group5;
    console.log(((group1 / peopleCounter) * 100).toFixed(2) + '%');
    console.log(((group2 / peopleCounter) * 100).toFixed(2) + '%');
    console.log(((group3 / peopleCounter) * 100).toFixed(2) + '%');
    console.log(((group4 / peopleCounter) * 100).toFixed(2) + '%');
    console.log(((group5 / peopleCounter) * 100).toFixed(2) + '%');

}

trekkingMania
    (["5",
        "25",
        "41",
        "31",
        "250",
        "6"]);
