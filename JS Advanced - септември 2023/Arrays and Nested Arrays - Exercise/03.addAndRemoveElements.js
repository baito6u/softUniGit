function addAndRemoveElements(array) {

    let num = 1;
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        const command = array[i];

        if (command == 'add') {
            resultArray.push(num);
        } else {
            resultArray.pop();
        }
        num += 1;
    }

    if (resultArray.length <= 0) {
        console.log('Empty');
    } else {
        console.log(resultArray.join('\n'));
    }
}

addAndRemoveElements(['add',
'add',
'add',
'add']);