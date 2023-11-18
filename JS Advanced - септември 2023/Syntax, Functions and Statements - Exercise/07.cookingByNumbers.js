function cookingByNumbers(...params) {

    let num = Number(params[0]);

    const commandsDictionary = {
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x + 1,
        bake: (x) => x * 3,
        fillet: (x) => x - x * 0.2,
    }

    for (let i = 1; i < params.length; i++) {
        const command = params[i];

        num = commandsDictionary[command](num);

        console.log(num);
    }

}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
//16 8 4 2 1
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
//3 4 2 6 4.8