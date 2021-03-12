var express = require('express');
var router = express.Router();
var Contact = require('../models/contact');

/* GET API contacts listing. */
router.get('/', function(req, res, next) {
  Contact.find(
    (err, contacts )=>{
      if(err)
        console.log(err);
      else
        res.json(contacts);
        /*res.render('form.twig',
          {
            title : "Contact list",
            cont : contacts
          }
        )*/
    }
  )
});

/* POST API contact */
router.post('/', function(req, res, next) {
  new Contact({
    FullName : req.body.FullName,
    Phone : req.body.Phone
  }).save(
    (err, newContact) => {
      if (err)
        console.log("Error message : "+err);
      else{
        console.log(newContact);
        res.send(" New contact added "+ newContact._id)
      }
    }
  )
});

/* PUT API contact */
router.put('/:id', function(req, res, next) {
    Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      function (err, data ) {
        if (err) console.log(err);
        else res.json(req.body);
      }
    )
});

/* DELETE API contact */
router.delete('/:id', function(req, res, next) {
  Contact.findByIdAndRemove(
    req.params.id,
    function (err, data ) {
      if (err) console.log(err);
      else res.send('contact deleted');
    }
  )
});

module.exports = router;
