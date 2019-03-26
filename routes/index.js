var router = require("express").Router();
var mongoose = require('mongoose');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.use('/locations',require('./locations'));
router.get('/locations',async(req,res)=>{
  let locations= await mongoose.model('locations').find();
  console.log('return from dbb');
  console.log(locations);
  res.render('locations',{locations})
})
module.exports = router;
