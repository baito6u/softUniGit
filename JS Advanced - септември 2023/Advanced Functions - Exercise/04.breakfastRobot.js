function breakfastRobot(params) {
  let storage = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  let recipeBook = {
    apple: {
      protein: 0,
      carbohydrate: 1,
      fat: 0,
      flavour: 2,
    },
    lemonade: {
      protein: 0,
      carbohydrate: 10,
      fat: 0,
      flavour: 20,
    },
    burger: {
      protein: 0,
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
    },
    eggs: {
      protein: 5,
      carbohydrate: 0,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  };

  return function manager(command) {
    let tokens = command.split(" ");
    let action = tokens[0];

    switch (action) {
      case "restock":
        return restock(tokens[1], Number(tokens[2]));
        break;
      case "prepare":
        return prepare(tokens[1], Number([tokens[2]]));
        break;
      case "report":
        return report();
        break;
    }
  };
  function report() {
    return `protein=${storage["protein"]} carbohydrate=${storage["carbohydrate"]} fat=${storage["fat"]} flavour=${storage["flavour"]}`;
  }

  function prepare(recipe, quantity) {
    let prepareRecipe = {};
    for (let [element, value] of Object.entries(recipeBook[recipe])) {
      let neededQuantity = value * quantity;
      if (storage[element] < neededQuantity) {
        return `Error: not enough ${element} in stock`;
      }
      prepareRecipe[element] = neededQuantity;
    }
    for (const [element, value] of Object.entries(prepareRecipe)) {
      storage[element] -= value;
    }
    return "Success";
  }

  function restock(microelement, quantity) {
    storage[microelement] += quantity;
    return "Success";
  }
}

let manager = breakfastRobot();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log("------------------------");
let manager2 = breakfastRobot();
console.log(manager2("restock flavour 50"));
console.log(manager2("prepare lemonade 4"));
console.log(manager2("restock carbohydrate 10"));
console.log(manager2("restock flavour 10"));
console.log(manager2("prepare apple 1"));
console.log(manager2("restock fat 10"));
console.log(manager2("prepare burger 1"));
console.log(manager2("report"));
