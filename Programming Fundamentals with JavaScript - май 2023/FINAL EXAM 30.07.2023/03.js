function problemThree(input) {

    let list =  {};

    let lines = input.shift();

    while(lines != "Log out") {
        let tokens = lines.split(' ');
        switch(tokens[0]) {
            case 'New': 
            let name = tokens[1];
            list[name] = {
                likes: 0,
                comments: 0,
            };
           
            break;
        }
        
        console.log(tokens[0]);
        lines = input.shift();
    }
} 
problemThree((["New follower: George",
"Like: George: 5",
"New follower: George",
"Log out"])
);