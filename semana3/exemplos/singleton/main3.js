const dbConnection1 = require('./singleton')
const dbConnection2 = require('./singleton')

console.log(dbConnection1.getConnection())
console.log(dbConnection2.getConnection())

console.log(dbConnection1 === dbConnection2) //true