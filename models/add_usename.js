const mongoose = require('mongoose');


// 创建用户的数据库表格
const schema = mongoose.Schema({
    username: String,
    password: String
});

// 创建操作数据库表格的模型
const User = mongoose.model('vip_user', schema);

// User.find((error, result)=>{
//     console.log(result);
// })


module.exports.isExistUserByName=function(username){
    return new Promise((resolve,reject)=>{
        User.findOne({username}).then((result)=>{
            if(result){
               //存在 执行失败函数;
                reject();
            }else{
                //不存在
                resolve();
                
            }
        })
    })
};

module.exports.saveUserInfo =function( username,password){
    return new Promise((resolve,reject)=>{
        let userInfo = new User({
            username,
            password
        });
        userInfo.save((error, newInfo)=>{
            if(error){
                //保存数据失败
                reject();
            }else{
                // 保存成功，注册成功
                resolve();
            }
        })
    })

}
module.exports.isExis_test_user_pasd=function( username,password){
    return new Promise ((resolve,reject)=>{
        User.findOne({username:username,password:password},(error,result)=>{
            if(result){
                //账号密码正确
                console.log(result);
                resolve();
            }else{
                //密码账号不正确
                console.log(result);
                reject();
            }
        })
    })
}
