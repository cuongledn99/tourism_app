var router = require("express").Router();
var mongoose = require('mongoose');
/* GET home page. */
router.get('/', async function(req, res, next) {
  const locations= await mongoose.model('locations').find().populate({
    path:'feedbacks',
    select:'content'
  }).exec();
	console.log("TCL: locations", JSON.stringify(locations))
  res.render('index', { locations });
});

// get data base on city
router.get('/:city',async (req,res)=>{
  const locations= await mongoose.model('locations').find({city:req.params.city});
  res.render('index',{locations});
})

//add new feedback
router.post('/feedback/:location_id',async(req,res)=>{
  try {
    const {content}=req.body;
    let newFeedback=await mongoose.model('feedbacks').create({...req.body,locationId:req.params.location_id});
    
    await mongoose.model('locations').update(
      {_id:req.params.location_id},
      {$push:{feedbacks:newFeedback}}
    )
    
    res.json({
      mess:'ok'
    })
  } catch (error) {
    
  }
})

//insert location

module.exports = router;
