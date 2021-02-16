let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ConnexionSchema = Schema({
  
id: Number,
login: String,
password : String
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Connexion', ConnexionSchema);
