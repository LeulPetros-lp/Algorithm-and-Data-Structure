const array_intersection = (array_1,array_2) => {

    let array_universal = [];

    for(let i =  0; i < array_1.length; i++) {
       if(array_1.includes(array_2[i])){
            array_universal.push(array_2[i])
       }

    }






    return array_universal;
}

module.exports = array_intersection