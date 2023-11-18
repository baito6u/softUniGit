function shoppingList(array) {

    let initialList = array.shift().split('!');

    let index = 0;
    let command = array[index];
    index++;

    while (command !== 'Go Shopping!') {
        let tokens = command.split(' ');
        let item = '';
        switch (tokens[0]) {
            case 'Urgent':
                item = tokens[1];
                if (!initialList.includes(item)) {
                    initialList.unshift(item);
                }
                break;
            case 'Unnecessary':
                item = tokens[1];
                if (initialList.includes(item)) {
                    initialList.splice(initialList.indexOf(item), 1);
                }
                break;
            case 'Correct':
                let oldItem = tokens[1];
                let newItem = tokens[2];
                let indexOfElement = initialList.indexOf(oldItem);
                if (indexOfElement > -1) {
                    initialList[indexOfElement] = newItem;
                }
                break;
            case 'Rearrange':
                item = tokens[1];
                if (initialList.indexOf(item) > -1 && initialList.indexOf(item) !== initialList.length -1) {
                    let currItem = initialList.splice(initialList.indexOf(item), 1);
                    initialList.push(currItem[0]);
                }
                break;
        }

        command = array[index];
        index++;
    }
    console.log(initialList.join(', '));
}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);