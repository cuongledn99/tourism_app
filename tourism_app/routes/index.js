var express = require('express');
var router = express.Router();
var Locations=require('../model/schema/locations');
/* GET home page. */
router.get('/', function(req, res, next) {
  try {
    let locations=Locations.find();
    console.log('locations');
    console.log(locations);
    res.render('index', {locations});
  } catch (error) {
    
  }
  
});

module.exports = router;
