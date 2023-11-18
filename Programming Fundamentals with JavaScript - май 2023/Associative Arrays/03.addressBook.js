function addressBook(array) {

    book = {};

    for (const line of array) {
        let [name, address] = line.split(':');
        book[name] = address;
    }

    let sortedBook = Object.entries(book).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));

    for (let [key, value] of sortedBook) {
        console.log(`${key} -> ${value}`);
    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);