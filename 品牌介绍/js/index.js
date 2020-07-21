$(function () {
    $(document).scroll(function() {
        var scroH = $(document).scrollTop();  //滚动高度
        if(scroH>46){
            $(".header_header_box .header_top").css({"display":"none"})
        }else{
            $(".header_header_box .header_top").css({"display":"block"})
        }
    })
    $("#submit").click(function () {
        var name = $("#name").val();
        if(name==''||name==undefined){
            $("#model_box_title").text('用户名不能为空！')
            $("#model_box").css({"display":'block'});
            return false;
        }else{
            $("#model_box").css({"display":'none'});
        }
        var phone = $("#phone").val();
        if(phone==''||phone==undefined){
            $("#model_box_title").text('手机号不能为空！')
            $("#model_box").css({"display":'block'});
            return false;
        }else{
            if(!(/^1[3456789]\d{9}$/.test(phone))){
                $("#model_box_title").text('手机号格式不正确')
                $("#model_box").css({"display":'block'});
                return false;
            }else{

                $("#model_box").css({"display":'none'});
            }
        }
    });
    $("#close").click(function () {
        $("#model_box").css({"display":'none'})
    })
    $("#select_adress").click(function () {
        if($(".select_adress")[0].style.display =='none'){
            $(".select_adress").css({"display":'block'});
            $("#select_adress_icon").attr("class", "glyphicon-menu-up glyphicon");
        }else{
            $(".select_adress").css({"display":'none'});
            $("#select_adress_icon").attr("class", "glyphicon-menu-down glyphicon");
        }
    })
})
