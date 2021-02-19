let express = require('express');
let app = express();
let bodyParser = require('body-parser');
//
let assignment = require('./routes/assignments');
//
let connexion = require('./routes/connexions');
//
const profilesRoutes = require('./routes/profiles');
//
let mongoose = require('mongoose');

const path = require('path');
const cors = require('cors');





mongoose.Promise = global.Promise;
//mongoose.set('debug', true);

// remplacer toute cette chaine par l'URI de connexion à votre propre base dans le cloud s
const uri = 'mongodb+srv://toureabdouljunior:TOUre2096@cluster0.y4qhl.mongodb.net/assignments?retryWrites=true&w=majority';

//localhost
//const uri2 = 'umongodb://localhost:27017/assignments';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
};

mongoose.connect(uri, options)
  .then(() => {
    console.log("Connecté à la base MongoDB assignments dans le cloud !");
    console.log("at URI = " + uri);
    console.log("vérifiez with https://api2096.herokuapp.com/api/assignments que cela fonctionne")
    console.log("vérifiez with https://api2096.herokuapp.com/api/connexions que cela fonctionne")
    console.log("vérifiez with https://api2096.herokuapp.com/api/images que cela fonctionne")
    console.log("vérifiez with https://api2096.herokuapp.com/api/profiles que cela fonctionne")
    },
    err => {
      console.log('Erreur de connexion: ', err);
    });

// Pour accepter les connexions cross-domain (CORS)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Pour les formulaires
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


let port = process.env.PORT || 8010;

// les routes
const prefix = '/api';

app.route(prefix + '/assignments')
  .get(assignment.getAssignments);

app.route(prefix + '/assignments/:id')
  .get(assignment.getAssignment)
  .delete(assignment.deleteAssignment);


app.route(prefix + '/assignments')
  .post(assignment.postAssignment)
  .put(assignment.updateAssignment);


/****************************connexions******************************/

app.route(prefix + '/connexions')
  .get(connexion.getConnexions);

/***********************************profiles******************************** */
app.use('/images', express.static(path.join('images')));

app.use('/api/profiles', profilesRoutes);



// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

module.exports = app;


