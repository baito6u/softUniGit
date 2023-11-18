function addAndRemove(arr) {

    let myArr = [];

    for (let index = 0; index < arr.length; index++) {
        let command = arr[index];

        if (command === 'add') {
            myArr.push(index + 1);
        } else if (command === 'remove') {
            myArr.pop();
        }
    }
    
    if (myArr.length == 0) {
        console.log('Empty');
    }

    console.log(myArr.join(' '));
}

addAndRemove(['add', 'add', 'remove', 'add', 'add']);