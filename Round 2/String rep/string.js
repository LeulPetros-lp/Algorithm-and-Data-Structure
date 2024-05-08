const string_alg = require('./string-alg')


let response = string_alg("peer preasure")
console.log(`Status: ${response.isDuplicate}, count: ${response.count}, correct value: ${response.word_c}`)