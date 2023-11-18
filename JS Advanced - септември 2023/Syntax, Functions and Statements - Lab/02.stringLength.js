function stringLength(strOne, strTwo, strThree) {

    let sumLength = strOne.length + strTwo.length + strThree.length;
    console.log(sumLength);
    let averageLength = Math.floor(sumLength / 3);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake');