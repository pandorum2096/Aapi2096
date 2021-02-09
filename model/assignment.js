let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
   /* id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean*/
id: Number,
nom: String,
prenom : String ,
classe : String ,
professeur : String ,
photo : String ,
nomDevoir : String ,
dateDeRendu: Date,
rendu: Boolean
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
