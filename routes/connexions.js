let Connexion = require('../model/connexion');

// Récupérer tous les assignments (GET)
function getConnexions(req, res){
    Assignment.find((err, connexions) => {
        if(err){
            res.send(err)
        }

        res.send(connexions);
    });
}

// Récupérer un assignment par son id (GET)
function getConnexion(req, res){
    let connexionId = req.params.id;

    Connexion.findOne({id: connexionId}, (err, connexion) =>{
        if(err){res.send(err)}
        res.json(connexion);
    })
}

// Ajout d'un assignment (POST)
function postConnexion(req, res){
    let connexion = new Connexion();
    connexion.id = req.body.id;
    connexion.login = req.body.login;
    connexion.password = req.body.password;

    console.log("POST connexion reçu :");
    console.log(connexion)

    connexion.save( (err) => {
        if(err){
            res.send('cant post connexion ', err);
        }
        res.json({ message: `${connexion.nom} saved!`})
    })
}

// Update d'un assignment (PUT)
function updateConnexion(req, res) {
    console.log("UPDATE recu connexion : ");
    console.log(req.body);
    Connexion.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, connexion) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
          res.json({message: 'updated'})
        }

      // console.log('updated ', assignment)
    });

}

// suppression d'un assignment (DELETE)
function deleteConnexion(req, res) {

    Connexion.findByIdAndRemove(req.params.id, (err, connexion) => {
        if (err) {
            res.send(err);
        }
        res.json({message: `${connexion.nom} deleted`});
    })
}



module.exports = { getConnexions, postConnexion, getConnexion, updateConnexion, deleteConnexion };
