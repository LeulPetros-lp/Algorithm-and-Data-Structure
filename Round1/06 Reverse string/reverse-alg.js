function reverse_string(string) {

  let i;
  let reverse_string  = "";
  
  string = string.split('')


  for(i = string.length; i > 0; i--) {
     console.log(i-1);
      reverse_string = reverse_string + string[i-1];
  }


  return reverse_string;
}


module.exports  = reverse_string;
