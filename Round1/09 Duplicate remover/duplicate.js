const duplicate_remover = require('./duplicate-alg');

const response = duplicate_remover([1,2,2,3,4,5,6,7,7]);
//                                  0,1,2,3,4,5,6,7,8
console.log(response)    