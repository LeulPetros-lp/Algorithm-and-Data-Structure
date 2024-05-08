let correct_array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//                    0   1   2   3   4   5   6   7   8   9  10   11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  

const find_missing = (array_letters) =>  {
    array_length  = array_letters.length
    let missing_values = [];


    // Filling out the missing value for the loop
    if(array_length < 26) {
        let to_val = 26-array_length;
        for(let i = 0; i < to_val;i++) {
            array_letters.push("");
        }
    }

    for(let j = 0; j < array_letters.length; j++) {
        if(array_letters[j] !== correct_array[j]){
            missing_values.push(correct_array[j]);
        } 
    }

    return missing_values;
}

module.exports = find_missing