function phoneBook(array) {

    let book = {};
    
    array.forEach(line => {
        let [name, phoneNumber] = line.split(' ');
        book[name] = phoneNumber;
    });

    for (let key in book) {
        console.log(`${key} -> ${book[key]}`);
    }

}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);