class Sort {
  static ascendingOrder(a, b) {
    return a - b;
  }
  static descendingOrder(a, b) {
    return b - a;
  }
}

console.log([1, 3, 4, 2].sort(Sort.ascendingOrder));
console.log([1, 3, 4, 2].sort(Sort.descendingOrder));
