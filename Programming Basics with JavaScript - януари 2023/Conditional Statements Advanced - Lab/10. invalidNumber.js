function invalidNumber(input) {
    let arg = Number(input[0]);

    if (arg >= 100 && arg <= 200 || arg === 0) {
     
    } else {
        console.log("invalid");
    }
}
invalidNumber(["0"]);