$('.btn').on('click', function(){

    // 取得用户输入的数据
    var user = $('.username').val();
    var psd = $('.password').val();

    // 对数据的判断
    if(!user || !psd ){
        alert('输入不能为空');
        return;
    }
    // 发送注册账号的请求
    $.ajax({
        url: '/api/login',
        data: {
            username: user,
            password: psd
        },
        method: 'POST',
        success: function(data){
           
            console.log(data);
            if(data.status === 0){
                console.log('登录成功');
                //跳转到登录
                window.location.href = '/';
            }else{
                //console.log('输入有误');
                alert(data.message);
            }
        },
        fail: function(error){
            console.log('请求失败');
            console.log(error);
        }
    })

    

})