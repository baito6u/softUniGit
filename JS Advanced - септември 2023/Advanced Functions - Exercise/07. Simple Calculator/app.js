function calculator() {
  let firstSelector;
  let secondSelector;
  let result;

  return {
    init: function (selectorA, selectorB, selectorResult) {
      firstSelector = document.querySelector(selectorA);
      secondSelector = document.querySelector(selectorB);
      result = document.querySelector(selectorResult);
    },

    add: function () {
      let numA = Number(firstSelector.value);
      let numB = Number(secondSelector.value);
      result.value = numA + numB;
    },

    subtract: function () {
      let numA = Number(firstSelector.value);
      let numB = Number(secondSelector.value);
      result.value = numA - numB;
    },
  };
}
