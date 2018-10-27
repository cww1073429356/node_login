const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('index');
})


router.get('/login',(req,res)=>{
    res.render('login');
})



router.get('/regiester',(req,res)=>{
    res.render('regiester');
})



module.exports=router;
