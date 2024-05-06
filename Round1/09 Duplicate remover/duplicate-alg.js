const duplicate_remover = (array) => {

    let duplicate_index  = [];
    let fixed_array = [];

    console.log(array)

    for(let i = 0; i < array.length; i++) {
        let isDuplicate = false;

        for(let j = i+1; j < array.length; j++) {
            if(array[i] == array[j]){
                isDuplicate = true;
                break
            }
        }

        if(isDuplicate) {
           array.pop(i-1);
        }

    }

    console.log(array)


    return fixed_array;

}

module.exports = duplicate_remover;