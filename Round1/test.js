const duplicate_remover  = (array) => {
    let fixed_arr = [];
  
    // Nested for loop for checking...
    for(let i = 0; i < array.length; i++) {
      let val1 = array[i];
      for (let j = 0; i < array.length;i++) {
        let val2 = array[j];
        
        if(val1 !== val2) {
          fixed_arr.push(array[i])
        } 
      }
    }
  
    return fixed_arr
  
  }
  
  
  let response  = duplicate_remover([1,2,3,4,5,3,4,6]);
  console.log(response);