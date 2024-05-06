const vowel_counter = (string) => {

    string = string.split("");
    let vowels = ["a","e","i","o","u"];
    let vowel_count = 0;

    for(let i = 0; i < string.length; i++){
        for(let j = 0; j < vowels.length;j++) {
            if(string[i] === vowels[j]) {
                vowel_count+=1;
            }
        }
    }


    return vowel_count;
}

module.exports = vowel_counter;