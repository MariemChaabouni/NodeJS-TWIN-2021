var express = require('express');
var router = express.Router();

router.get('/', function  (req, res, next) {
    res.write(" Categories list ....");
    res.end();
});

router.get('/index/:id', function (req, res, next) {
    if(req.params.id == 0){
        console.log("next");
        next('route');
    }else{
        next();
    }
}, function (req, res, next) {
    res.send("Suite appel fonction callback : category number "+ req.params.id);
});

router.get('/index2/:id', function  (req, res, next) {
    res.send ("categories list2");
 });

router.get('/index/:id', function  (req, res, next) {
   next('route');
});

router.get('/index/:id', function  (req, res, next) {
    res.send ("categories list3");
 });

module.exports = router;