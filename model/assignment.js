let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
  
id: Number,
nom: String,
prenom : String ,
classe : String ,
professeur : String ,
photo : String ,
nomDevoir : String ,
note : String ,
dateDeRendu: Date,
rendu: Boolean,
remarques : String
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
