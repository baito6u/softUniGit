function reverseAnArrayOfNumbers(n, array) {
    let newArray = [];
    for (let i = 0; i < n; i++) {
        newArray.push(array[i]);    // еднаков с: newArray[n - 1 - i] = array[i]; заявърта обратно числата от масива в новия насив
    }
    let output = '';
    for (let j = newArray.length - 1; j >= 0; j--) {
        output += `${newArray[j]} `;    // еднакво с вместо да правим нова променлива директно пишем console.log(newArray.join(' '));
    }
    console.log(output);
}
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);