var express = require('express');
var router = express.Router();
var Contact = require('../models/contact');

/* GET UI contacts listing. */
router.get('/', function(req, res, next) {
  Contact.find(
    (err, contacts )=>{
      if(err)
        console.log(err);
      else
        res.render('form.twig',
          {
            title : "Contact list",
            cont : contacts
          }
        )
    }
  )
});

/* POST UI contact */
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
        res.redirect("/contactsUI");
      }
    }
  )
});

/* PUT API contact */
router.post('/update/:id', function(req, res, next) {
    Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      function (err, data ) {
        if (err) console.log(err);
        else   
        res.redirect("/contactsUI");
      }
    )
});

/* UI update Contact contact */
router.post('/update/affich/:id', function(req, res, next) {
  Contact.findById(
    req.params.id,
    function (err, contact ) {
      if (err) console.log(err);
      else res.render( 
        'form-update.twig',
        {
          title : "Contact Update",
          cont : contact
        }
      );
    }
  )
});

/* DELETE API contact */
router.post('/delete/:id', function(req, res, next) {
  Contact.findByIdAndRemove(
    req.params.id,
    function (err, data ) {
      if (err) console.log(err);
      else res.redirect("/contactsUI");
    }
  )
});

module.exports = router;
