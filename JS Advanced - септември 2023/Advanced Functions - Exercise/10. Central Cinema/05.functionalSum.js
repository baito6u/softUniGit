function functionalSum(num) {
    let sum = 0;
    sum += num;

    function calc(anotherNum) {
        sum += anotherNum;
        return calc;
      }
    
      calc.toString = () => sum;
      return calc;
    
    
}
console.log(functionalSum(1)(2)(3)(4)(5).toString());