var express = require('express');
var router = express.Router();
var os= require('os');

router.get('/', function  (req, res, next) {
    res.json(
        {
            hostname : os.hostname(),
            type : os.type(),
            platform : os.platform()
        }
    );
    res.end();
});

router.get('/cpus', function  (req, res, next) {
    res.json(
       os.cpus()
    );
    res.end();
});

router.get('/cpus/:id', function  (req, res, next) {
    var cpus = os.cpus();
    res.json(
       cpus[req.params.id]
    );
    res.end();
});



module.exports = router;