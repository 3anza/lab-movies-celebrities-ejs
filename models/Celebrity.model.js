//  Add your code here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})

mongoose.set('strictQuery', false); 

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports = Celebrity