const text_fixer = (string) => {
    let string_array = string.split("");

    // creating an array to store the numbers where the index of the -->
    // letters than need to upper case..
    let uplet_index = [0];


    // creating the for loop to check the location for the text -->
    // and push the location of the letter where its supposed to be.
    for(let i = 0; i < string_array.length; i++) {
        if(string_array[i] === ' ' || string_array[i] === '.') {
               uplet_index.push(i+1);
        }
    }
   
    // transforming based on the uplet index's
    for (let j = 0; j < uplet_index.length;j++) {
        string_array[uplet_index[j]] = string_array[uplet_index[j]].toUpperCase() 
    }
    return string_array.join("")
}

module.exports = text_fixer;