var express = require('express');
var router = express.Router();
var products = require('../data/products.json')

router.get('/', function  (req, res, next) {
    res.json(
       products
    );
    res.end();
});

router.get('/:id', function  (req, res, next) {
    var id =req.params.id;
    res.json(
       products[req.params.id]
    );
    res.end();
});

router.get('/:id/:qt', function  (req, res, next) {
 
    res.json(
       {
            'id' : req.params.id,
            'qt' : req.params.qt,
            'unit_price' : products[req.params.id].price,
            'total_price' : req.params.qt * products[req.params.id].price
       }
    )
    res.end();
});

router.get('/search/instock/:qt', function (req, res, next) {      
    var list=[];
    for(var element in products){
        console.log(element);  
        if(products[element].stock>req.params.qt){
            list.push(products[element]);
        }
    }
    res.json(list);
    res.end();  
});

module.exports = router;