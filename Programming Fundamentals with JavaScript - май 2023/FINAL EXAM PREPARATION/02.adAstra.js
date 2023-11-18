function adAstra(input) {
    let text = input[0];
    let pattern = /([#]|[|])(?<item>[A-Za-z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,5})\1/g;

    let matches = pattern.exec(text);
    let totalCalories = 0;
    let buff = '';

    while (matches) {
        let item = matches.groups['item'];
        let date = matches.groups['date'];
        let calories = Number(matches.groups['calories']);

        totalCalories += calories;
        buff += `Item: ${item}, Best before: ${date}, Nutrition: ${calories}\n`

        matches = pattern.exec(input);
    }
    let daysLeft = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${daysLeft} days!`);
    console.log(buff);

}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);