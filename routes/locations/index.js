var router = require("express").Router();

router.get('/',async (req,res)=>{
    res.json({
        mess:'ok'
    });
});