function tradeCommissions(input) {
    let city = input[0];
    let volume = Number(input[1]);
    let precetageCommission = 0;
    
   switch(city) {
    case "Sofia":
        if (volume >=0 && volume <=500) {
            precetageCommission = volume * 0.05;
            console.log(precetageCommission.toFixed(2));
        } else if (volume >500 && volume <= 1000) {
            precetageCommission = volume * 0.07;
            console.log(precetageCommission.toFixed(2));
        } else if (volume >1000 && volume <= 10000) {
            precetageCommission = volume * 0.08;
            console.log(precetageCommission.toFixed(2));
        } else if (volume > 10000) {
            precetageCommission = volume * 0.12;
            console.log(precetageCommission.toFixed(2));
        } else {
            console.log("error");
        }
    break;
    case "Varna":
        if (volume >=0 && volume <=500) {
            precetageCommission = volume * 0.045;
            console.log(precetageCommission.toFixed(2));
        } else if (volume >500 && volume <= 1000) {
            precetageCommission = volume * 0.075;
            console.log(precetageCommission.toFixed(2));
        } else if (volume >1000 && volume <= 10000) {
            precetageCommission = volume * 0.1;
            console.log(precetageCommission.toFixed(2));
        } else if (volume > 10000) {
            precetageCommission = volume * 0.13;
            console.log(precetageCommission.toFixed(2));
        } else {
            console.log("error");
        }
    break;
    case "Plovdiv":
        if (volume >=0 && volume <=500) {
            precetageCommission = volume * 0.055;
            console.log(precetageCommission.toFixed(2));
        } else if (volume >500 && volume <= 1000) {
            precetageCommission = volume * 0.08;
            console.log(precetageCommission.toFixed(2));
        } else if (volume >1000 && volume <= 10000) {
            precetageCommission = volume * 0.12;
            console.log(precetageCommission.toFixed(2));
        } else if (volume > 10000) {
            precetageCommission = volume * 0.145;
            console.log(precetageCommission.toFixed(2));
        } else {
            console.log("error");
        }
    break;
    default: console.log("error");
    break;
    }
}
tradeCommissions(["Kaspichan","-50"]);