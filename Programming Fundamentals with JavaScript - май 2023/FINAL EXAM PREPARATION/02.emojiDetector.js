function emojiDetector(input) {

    let text = input.shift();
    let threshold = 1;
    let countOfAllEmojis = 0;
    let coolEmojis = [];

    let pattern = /(::|\*\*)(?<name>[A-Z][a-z]{2,})\1/g;
    let digitPatern = /\d/g;

    let textMatches = text.matchAll(pattern);
    let digitMatches = text.match(digitPatern);

    for (const digit of digitMatches) {
        let num = Number(digit);
        threshold *= num;
    }
    console.log(`Cool threshold: ${threshold}`);

    for (const textMatch of textMatches) {
        let emoji = textMatch[0];
        let emojiName = textMatch.groups.name;
        countOfAllEmojis++;

        let emojiCoolnes = 0;

        for (let i = 0; i < emojiName.length; i++) {
            emojiCoolnes += emojiName.charCodeAt(i);
        }

        if (emojiCoolnes >= threshold) {
            coolEmojis.push(emoji);
        }
    }
    console.log(`${countOfAllEmojis} emojis found in the text. The cool ones are:`);

    for (let emoji of coolEmojis) {
        console.log(emoji);
    }

}

emojiDetector([
    "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"
]);