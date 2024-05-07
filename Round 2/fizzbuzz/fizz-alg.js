const fizz_buzz = (num)  => {

    // creating a for loop to create the array till the number inputed
    let array = [];

    for(let i = 1; i <= num;i++) {
        array.push(i);
    }

    // creating the second for loop for checking the statements:
    // divisible by 3 --> fizz
    // --------- by 5 --> buzz
    //  both fizzbuzz

    for (let j = 0; j < array.length; j++) {
        if(array[j] % 3 === 0) {
            array[j] = "fizz"
        } else if(array[j] % 5 === 0) {
            array[j] = "buzz"
        } else if(array[j] % 5 === 0 && array[j] % 3 === 0 ) {
            array[j] = "fizzbuzz"
        }
    }




    return array
}

module.exports = fizz_buzz