function sortAnArrayByTwoCriteria(array) {
    
    let sortedArray = array.sort((a,b) =>{
        let primary = a.length - b.length;
        let second = a.localeCompare(b);

        return primary || second;
    });

    console.log(sortedArray.join("\n"));
}
sortAnArrayByTwoCriteria(['alpha','beta','gamma']);
/*
beta 
alpha 
gamma
*/