const express = require('express');
const bodyParser = require('body-parser');
const vip_user = require('../models/add_usename');


const router = express.Router();


router.use(bodyParser.urlencoded({ extended: false }));
router.post('/regiester', (req, res) => {
    let { username, password } = req.body;
    console.log(username, password)

    //判断该用户是否存在;
    vip_user.isExistUserByName(username)
        .then(() => {
            // 不存在，将数据保存到数据库中，完成注册，响应客户端;
            vip_user.saveUserInfo(username, password).then(() => {
                res.json({
                    status: 0,
                    message: '注册成功'
                })
            })
                .catch(() => {
                    res.json({
                        status: 1,
                        message: '注册失败，数据库错误'
                    })
                })
        })
        .catch(() => {
            // 存在，响应客户端，该用户已存在
            res.json({
                status: 2,
                message: '该用户名已存在'
            })
        })

})
router.post('/login',(req,res)=>{
    let { username, password } = req.body;
    //console.log(username, password)
    vip_user.isExis_test_user_pasd(username,password)
    .then(()=>{
        res.json({
            status: 0,
            data:{
                username,
                password
            },
            message: '登录成功'
        })
    })
    .catch(()=>{
        res.json({
            status: 1,
            message: '输入有误'
        })
    })

})
module.exports = router;