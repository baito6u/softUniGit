function addAndSubtract(array) {
    let newArray = [];
    let sumArray = 0;
    let newArraySum = 0;

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        sumArray += element;

        if (element % 2 === 0) {
            element = element + i;
        } else {
            element = element - i;
        }
        
        newArray.push(element);
        newArraySum += newArray[i];
    }
    console.log(newArray);
    console.log(sumArray);
    console.log(newArraySum);
}

addAndSubtract([5, 15, 23, 56, 35]);