const max_value = (arr) => {

    // Max value algorithm
    let max_num = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max_num) {
            max_num = arr[i];
        }
    }
    
    return max_num
}


module.exports = max_value;