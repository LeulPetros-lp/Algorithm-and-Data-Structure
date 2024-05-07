const duplicate_remover = (arr) => {

    let fixed_arr = [];
  
    for(let i = 0; i < arr.length;i++) {
      if(!fixed_arr.includes(arr[i])){
        fixed_arr.push(arr[i])
      }
    } 
  
    return fixed_arr
  
}


module.exports = duplicate_remover