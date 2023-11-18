function modifyArray(numbers) {
    let originalSum = numbers.reduce((a, b) => a + b);
    let modifiedSum = 0;
    let modifiedNumbers = numbers.map((number, index) => {
      if (number % 2 === 0) {
        number += index;
      } else {
        number -= index;
      }
      modifiedSum += number;
      return number;
    });
    return `${modifiedNumbers}\n${originalSum}\n${modifiedSum}`;
  }
  
  console.log(modifyArray([5, 15, 23, 56, 35])); // "[5,14,21,59,31]\n134\n130"
  console.log(modifyArray([-5, 11, 3, 0, 2])); // "[-5,10,1,3,6]\n11\n15"
  