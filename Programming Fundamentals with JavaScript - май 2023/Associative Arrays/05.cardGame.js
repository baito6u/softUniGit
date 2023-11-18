function cardGame(array) {

    let allPlayers = {};

    let values = {
        '2': 2,
        '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
        'J': 11, 'Q': 12, 'K': 13, 'A': 14
    };

    let power = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1,
    }

    for (let line of array) {
        let [playerName, cardsDraws] = line.split(': ');
        let currentCards = cardsDraws.split(', ');

        if (!allPlayers.hasOwnProperty(playerName)) {
            allPlayers[playerName] = [];
            currentCards.forEach(card => {
                if (!allPlayers[playerName].includes(card)) {
                    allPlayers[playerName].push(card);
                }
            });
        } else {
            for (let currentCard of currentCards) {
                if (!allPlayers[playerName].includes(currentCard)) {
                    allPlayers[playerName].push(currentCard);
                }
            }
        }
    }

    let entries = Object.entries(allPlayers);

    entries.forEach(player => {
        let name = player[0];
        let cards = player[1];
        let sum = 0;

        cards.forEach(card => {
            let cardValue = 0;
            let cardPower = 0;
            let currentCard = card.split('');
            let cardLength = currentCard.length;

            if (cardLength === 2) {
                cardValue = Number(values[currentCard[0]]);
                cardPower = power[currentCard[1]];
                sum += cardValue * cardPower;
            } else {
                cardValue = Number(currentCard[0] + currentCard[1]);
                cardPower = currentCard[2];
                sum += cardValue * power[cardPower];
            }
        });

        console.log(`${name}: ${sum}`);

    });
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);