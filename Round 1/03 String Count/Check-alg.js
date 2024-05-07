const count_fnc = (string,letter) => {
    let letter_count = 0;
    for(let i = 0; i < string.length; i++) {
        if(string[i].toLowerCase() == letter.toLowerCase()){
            letter_count+=1;
        }
    }
    return letter_count;
}

module.exports = count_fnc;