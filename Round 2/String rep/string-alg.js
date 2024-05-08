const string_alg = (string) => {

    let string_arr = string.split("")
    let fixed_string = [];
    let isDuplicate;
    let count;

   

    let status ;


    for(let i = 0; i < string_arr.length; i++) {
        if(!fixed_string.includes(string_arr[i])){
            fixed_string.push(string_arr[i])
            
        }       
    }

    // here is where im going to implment the check
    if(string_arr.length-fixed_string.length > 0) {
        status = {
            isDuplicate: true,
            count: string_arr.length-fixed_string.length,
            word_c: fixed_string.join("")
        }
    } else {
        status = {
            isDuplicate: false,
            count: 0,
            word_c: fixed_string.join("")
        }
    }


    return status


   
}

module.exports = string_alg