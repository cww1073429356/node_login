const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const reqHtml=require('./routers/reqHtml');
const reqApi=require('./routers/reqApi')
const server=express();






server.use('/public',express.static('static'))





server.use('/api',reqApi)

// 配置模板引擎
server.set('view engine','html');
server.engine('html',ejs.__express);

server.use('/',reqHtml)



new Promise((resolve,reject)=>{
    
    mongoose.connect('mongodb://localhost:27017',{useNewUrlParser: true},(error)=>{
        if(!error){
            console.log('连接成功');
            resolve();
        }else{
            console.log('连接失败');
            
        }
    })
})

.then(()=>{
    server.listen(3000,'localhost',(error)=>{
        if(!error){
            console.log('启动成功')
        }
    })
    
})

module.exports=server;