function theRace(array) {

    let pattern = /(#|\$|%|\*|&)(?<name>[A-Za-z]+)\1=(?<length>\d+)!!(?<code>.+)/;

    let encrypted = '';
    for (let index = 0; index < array.length; index++) {
        let result = pattern.exec(array[index]);
        if (result) {
            let lengthOfCode = Number(result.groups.length);
            let resultCode = result.groups.code;
            let resultName = result.groups.name
            if (resultCode.length === lengthOfCode) {
                for (let i = 0; i < resultCode.length; i++) {
                    encrypted += String.fromCharCode(resultCode.charCodeAt(i) + lengthOfCode);
                }
                console.log(`Coordinates found! ${resultName} -> ${encrypted}`);
                break;
            } else {
                console.log('Nothing found!');
            }
        } else {
            console.log('Nothing found!');
        }
    }
}


theRace(["%GiacomoAgostini%=7!!hbqw",
    "&GeoffDuke*=6!!vjh]zi",
    "JoeyDunlop=10!!lkd,rwazdr",
    "Mike??Hailwood=5!![pliu",
    "#SteveHislop#=16!!df%TU[Tj(h!!TT[S"]);