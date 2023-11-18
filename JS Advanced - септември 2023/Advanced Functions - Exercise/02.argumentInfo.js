function argumentInfo(...params) {
  let result = {};
  for (const element of params) {
    let type = typeof element;
    console.log(`${type}: ${element}`);
    if (!result.hasOwnProperty(type)) {
      result[type] = 0;
    }
    result[type] = result[type] + 1;
  }

  let sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]);

  for (const [key, value] of sortedResult) {
    console.log(`${key} = ${value}`);
  }
}
argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
