function three(array) {

    let listOfCards = array.shift().split(', ');
    let numOfComands = Number(array.shift());

    for (let index = 0; index < numOfComands; index++) {
        let currentIndex = array[index].split(', ');
        let command = currentIndex[0];

        let cardName = '';
        let cardIndex = 0;

        switch (command) {
            case 'Add':
                cardName = currentIndex[1];
                if (!listOfCards.includes(cardName)) {
                    listOfCards.push(cardName);
                    console.log('Card successfully added');
                } else {
                    console.log('Card is already in the deck');
                }
                break;
            case 'Remove':
                cardName = currentIndex[1];
                if (listOfCards.includes(cardName)) {
                    listOfCards.splice(listOfCards.indexOf(cardName), 1);
                    console.log('Card successfully removed');
                } else {
                    console.log('Card not found');
                }
                break;
            case 'RemoveAt':
                cardIndex = currentIndex[1];
                if (cardIndex < 0 && cardIndex > listOfCards.length - 1) {
                    console.log('Card successfully removed');
                } else {
                    listOfCards.splice(listOfCards.indexOf(cardName), 1);
                    console.log("Index out of range");
                    break;
                }
                break;
            case 'Insert':
                cardIndex = Number(currentIndex[1]);
                cardName = currentIndex[2];
                if (cardIndex < 0 && cardIndex > listOfCards.length) {
                console.log("Index out of range")
                return;
                }  else if (listOfCards.includes(cardName)) {
                    console.log('Card is already in the deck');
                }
                listOfCards.splice(cardIndex, 0, cardName);
                console.log('Card successfully added');
                break;
        }
    }
    console.log(listOfCards.join(', '));
}

three(["Jack of Spades, Ace of Clubs, Jack of Clubs",
"2",
"Insert, -1, Queen of Spades",
"Remove At, 1"]);

    //Index out of range
    //Card successfully removed
    //Jack of Spades, Jack of Clubs
