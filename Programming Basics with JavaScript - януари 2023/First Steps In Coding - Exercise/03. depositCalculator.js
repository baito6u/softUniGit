function depositCalculator(input) {
    let amountDeposited = Number(input[0]);
    let termOfTheDeposit  = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let accruedInterest = amountDeposited * (annualInterestRate / 100);
    let interestForMonth = accruedInterest / 12;
    let totalAmount = amountDeposited + (termOfTheDeposit * interestForMonth);

    console.log(totalAmount);
}
depositCalculator(["2350","6","7"]);