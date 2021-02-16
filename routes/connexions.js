let Connexion = require('../model/connexion');

// Récupérer tous les assignments (GET)
function getConnexions(req, res){
    Connexion.find((err, connexions) => {
        if(err){
            res.send(err)
        }

        res.send(connexions);
    });
}





module.exports = { getConnexions};
