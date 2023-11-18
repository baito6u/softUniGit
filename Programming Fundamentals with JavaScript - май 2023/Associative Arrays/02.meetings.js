function meetings(array) {

    let schedule = {};

    array.forEach(element => {
        let [day, name] = element.split(' ');
        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    });

    // for (let key in schedule) {
    //     console.log(`${key} -> ${schedule[key]}`);
    // }

    for (let [key, value] of Object.entries(schedule)) {
        console.log(`${key} -> ${value}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);