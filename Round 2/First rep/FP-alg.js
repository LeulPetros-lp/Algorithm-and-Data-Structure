let non_rep_wrd  = [];
let rep_wrd = [];
    
    
const first_rep_fnc = (string) => {
 
    let string_arr = string.toLowerCase().split("");
    
    for (let i = 0; i < string.length; i++) {
        if(!non_rep_wrd.includes(string_arr[i])){
            non_rep_wrd.push(string_arr[i])
            
        }  else {
            rep_wrd.push(string_arr[i])
        }

    }
    
    return rep_wrd[0]
}

module.exports = first_rep_fnc;