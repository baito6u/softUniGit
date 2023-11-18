function nonDecreasingSubset(arr) {

    

    for (let index = 0; index < arr.length; index++) {
        let result = arr.filter(arr.length[index] > arr.length[index + 1]);
        
       
        console.log(result);
    }


}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);