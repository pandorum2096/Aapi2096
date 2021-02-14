const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, files, callBack) => {
        callBack(null, 'public')
    },
   filename: (req, files, callBack) => {
        callBack(null, `${files.originalname}`)
    }

})

const upload = multer({ storage: storage })


// upload plusieurs fichier
router.post('/multipleFiles', upload.array('files'), (req, res, next) => {

    const files = req.files;
    const info = req.body.info;
    console.log(files);


    if (!files) {
        const error = new Error('No File')
        error.httpStatusCode = 400
        return next(error)
    } else {
        console.log(files[0].path)
        res.send({ status: 'ok' });

        var myquery = { document: info };
        var newvalues = { document: files[0].path };

    }
});

module.exports = router;