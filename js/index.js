$(function(){
    var navas=$('.navigation').offset().top;
    var circle=$('.circle');
    // var li=$('.li');
    var list=$('.list');
    var menu=$('.menu');
    var arr=[];
    var don=$('.don');
    var top=$('.top');
    var flag=true;
    var tancard=$('.navlist1');
    $(window).on('load',function(){
        $(window).resize();
    });
    //    mask动画线条宽
    console.log($(window).width())
    $(window).on('resize',function(){
        var w=$('.mask').width();
        $('.mask .coverTop,.coverBottom').width(w-60);
        $('.bigbox-one .expRight').height($('.bigbox-one .expLeft').height())

    });
    $(window).resize();

    tancard.on('click',function(){
        $('.tancard').toggleClass('tanchu');
    });
    don.each(function(i,v){
        arr.push($(this).offset().top)
    });
    list.eq(0).css({color:'#E7746F'});
    menu.eq(0).css({color:'#E7746F'});
    $(window).on('scroll',function(){
        var iw=document.body.scrollTop||document.documentElement.scrollTop;
        console.log(iw);
        if(iw+50>=navas){
            $('.navigation').addClass('act');
            $('.tancard').addClass('strock');
            $(arr).each(function(i,v){
                if(iw+50>v){
                    list.each(function(i,v){
                        $(v).css({color:'#222'})
                    });
                    menu.each(function(i,v){
                        $(v).css({color:'#222'})
                    });
                    list.eq(i).css({color:'#E7746F'});
                    menu.eq(i).css({color:'#E7746F'})
                }
            });
        }else{
            $('.navigation').removeClass('act');
            $('.tancard').removeClass('strock');
        }
        if(iw>120){
            top.addClass('topxian')
        }else{
            top.removeClass('topxian')

        }
        if(iw>200){
            $('.abheader').addClass('abtop');
            $('.row').addClass('rowtop');
            $('.say').addClass('saytop')
        }
        if(iw>460){
            $('.pic').addClass('picbig')
        }
        if(iw>650){
            $('.tell').addClass('tellxian')
        }
        if(iw>1100){
            $('.experbox').addClass('exptop')
        }
        if(iw>1250){
            $('.bigbox .add').addClass('addone')
        }
        if(iw>1300){
            $('.bigbox .addcon').addClass('addconone')
        }
        if(iw>1400){
            $('.bigbox-one .add').addClass('addone')
        }
        if(iw>1500){
            $('.bigbox-one .addcon').addClass('addconone')
        }
        if(iw>1600){
            $('.bigbox-two .add').addClass('addtwo')
        }
        if(iw>1700){
            $('.bigbox-two .addcon').addClass('addcontwo')
        }
        if(iw>2300){
            $('.skillbox').addClass('skilltop')
        }
        if(iw>2400&&flag==true){
            load();
            flag=false;
        }
        if(iw>3000){
            $('.workbox').addClass('worktop')
        }
        if(iw>3200){
            $('.showbox').addClass('showbig')
        }
        if(iw>4000){
            $('.callheader').addClass('callheleft');
            $('.callcon').addClass('callcoleft');
            $('.callbtn').addClass('callbtleft')
        }
        // if(iw>4600){
        //     $('.contactBox').addClass('contop')
        // }
        if(iw>5000){
            $('.name').addClass('nametop');
            $('.email').addClass('emailtop');
            $('.message').addClass('messagetop');
            $('.send').addClass('sendtop');
            $('.phone').addClass('phonetop');
            $('.youxiang').addClass('youxiangtop')
        }
        if(iw>5100){
            $('.qq').addClass('qqtop');
            $('.weixin').addClass('weixintop');
            $('.weibo').addClass('weibotop')
        }
    });
    circle.on('click',function(){
        $(window).trigger('scroll');
        $(document.body).animate({scrollTop:navas},500);
        $(document.documentElement).animate({scrollTop:navas},500);
    });
    list.on('click',function(){
        $(window).trigger('scroll');
        var num=$(this).index();
        $(document.body).animate({scrollTop:arr[num]},500);
        $(document.documentElement).animate({scrollTop:arr[num]},500);
    });
    menu.on('click',function(){
        $(window).trigger('scroll');
        var num=$(this).index();
        $(document.body).animate({scrollTop:arr[num]},500);
        $(document.documentElement).animate({scrollTop:arr[num]},500);
    });
    top.on('click',function(){
        $(window).trigger('scroll');
        $(document.body).animate({scrollTop:0},500);
        $(document.documentElement).animate({scrollTop:0},500);
    });
    function num(i,podeg){
        var canvas =$('.canvas').get(i);
        var ctx = canvas.getContext("2d");
        var W = canvas.width;
        var H = canvas.height;
        var deg=0;
        var loop;
        var text,text_w;
        function init(){
            ctx.clearRect(0,0,W,H);
            ctx.beginPath();
            ctx.strokeStyle="rgb(245, 245, 245)";
            ctx.lineWidth=10;
            ctx.arc(W/2,H/2,65,0,Math.PI*2,false);
            ctx.stroke();

            var r = deg*Math.PI/180;
            ctx.beginPath();
            ctx.strokeStyle = "rgb(255,82,82)";
            ctx.lineWidth=10;
            ctx.arc(W/2,H/2,65,0-90*Math.PI/180,r-90*Math.PI/180,false);
            ctx.stroke();
            ctx.fillStyle="#666";
            ctx.font="25px 'Raleway'";
            text = Math.floor(deg/360*100)+"%";
            text_w = ctx.measureText(text).width;
            ctx.fillText(text,W/2 - text_w/2,H/2+15);
        }
        function draw(new_deg){
            loop = setInterval(function(){
                deg++;
                if(deg==new_deg){
                    clearInterval(loop)
                }
                init();
            },1);
        }
        draw(podeg);
    }
    function load(){
        num(0,342);
        num(1,342);
        num(2,324);
        num(3,324);
        num(4,324);
        num(5,324);
        num(6,288);
        num(7,324);
    }



});