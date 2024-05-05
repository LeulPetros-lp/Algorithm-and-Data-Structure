const text_fixer = (string) => {
   let capil = [];

   string_arr = string.split(" ");
   
   
   for (let i = 0; i < string_arr.length; i++) {
      capil.push(string_arr[i][0].toUpperCase() + string_arr[i].slice(1));
   }
   
   return capil.join(" ")


}

module.exports = text_fixer;