function problemTwo(input) {

    let n = Number(input.shift());
    let result = '';
    
    let pattern = /(\W{0,3})>(?<numbers>\d{3})|(?<lower>[a-z]{3})|(?<upper>[A-Z]{3})|(?<symbols>\W{0,3})<(\W{0,3})/;

    for (const line of input) {
        let matches = line.match(pattern);
        let numbers = matches.groups.numbers;
        let lower = matches.groups.lower;
        let upper = matches.groups.upper;
        let symbols = matches.groups.symbols;
    
        if(matches === undefined) {
            break;
        }  
        if (matches.includes(numbers) && matches.includes(lower) && matches.includes(upper) && matches.includes(symbols)) {
            
            result += `${numbers}${lower}${upper}${symbols}`;
        }
        
        
    }
    console.log(result);
} 

problemTwo((["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"])
);