function calorieObject(array) {

    let obj = {};

    for (let index = 0; index < array.length; index += 2) {
        const nameOfTheFood = array[index];
        const calories = Number(array[index + 1]);

        obj[nameOfTheFood] = calories
    }
    console.log(obj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);