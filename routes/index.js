var router = require("express").Router();
var mongoose = require('mongoose');
var uploadFile = require('../services/uploadFile');
/* GET home page. */
// router.get('/', async function (req, res, next) {
//   const locations = await mongoose.model('locations').find().populate({
//     path: 'feedbacks',
//     select: 'content'
//   }).exec();
//   console.log("TCL: locations", JSON.stringify(locations))
//   res.render('index', { locations });
// });


//get location by id
router.get('/:location_id', async function (req, res, next) {
  const locations = await mongoose.model('locations').findById(req.params.location_id).populate({
    path: 'feedbacks',
    select: 'content'
  }).exec();
  console.log('get by id');
  console.log(locations);
  res.json({
    locations
  })
});

// get data base on city
router.get('/:city',  (req, res) => {
  // try {
  //   console.log('inside get city')
  //   const locations = await mongoose.model('locations').find({ city: req.params.city });
  //   console.log("TCL: locations", locations)
  //   res.render('index', { locations });
  // } catch (error) {

  // }
  res.jsonn({
    mess:'ok'
  })

})
router.get('/dm',function(req,res){
  res.json({
    mess:'ok'
  })
})

//add new feedback
router.post('/feedback/:location_id', async (req, res) => {
  try {
    const { content } = req.body;
    let newFeedback = await mongoose.model('feedbacks').create({ ...req.body, locationId: req.params.location_id });

    await mongoose.model('locations').update(
      { _id: req.params.location_id },
      { $push: { feedbacks: newFeedback } }
    )

    res.json({
      mess: 'ok'
    })
  } catch (error) {

  }
})

//insert location
router.post('/location', uploadFile.StoreFile().any(), async (req, res) => {
  try {
    let { name, address, shortDescription, city, content } = req.body;
    
    let data = await mongoose.model('locations').create({
      name: name,
      address: address,
      shortDescription: shortDescription,
      city: city,
      content: content
    });
    res.json({
      status: 'ok',
      message: 'insert location success'
    })
  } catch (error) {

  }
})
module.exports = router;
