$(document).ready(function() {
    $("#steps-menu a").click(function(event) {
        // Replaces main content
        event.preventDefault();
        $(this).parent().addClass("is-active");
        $(this).parent().siblings().removeClass("is-active");
        var step = $(this).attr("href");
        $(".step-content").not(step).css("display", "none");
        $(step).fadeToggle();

        // Rotates the wheel
        $("#steps-menu").removeClass();
        var stepClass = step.charAt(6);
        $("#steps-menu").addClass("step-" + stepClass);
        switch((stepClass-0)){
            case 1:
            $("#title").text("获得问题推荐");
            $("#content1").text("你在社区里问任何你能想到的问题，它们可能很奇怪也可能很深奥，这里的朋友会告诉你书中的答案。");
            $("#content2").text("让我们一起来探索和破译吧！");
            break;
        case 2:
            $("#title").text("结交书友");
            $("#content1").text("你可能会遇见爱同一本书的人、拥有同样困惑的人......你的烦恼或许是我的烦恼，你在读的书或许也能帮助到我。合抱之木，生于毫末。");
            $("#content2").text("我知道你也喜欢读书！");
            break;
        case 3:
            $("#title").text("培养阅读习惯");
            $("#content1").text("如果主动走入书本堆叠的世界需要一个理由，那就让探寻答案成为你的指引，你不需要别人的答案");
            $("#content2").text("自己便可以探寻！");
            break;
        case 4:
            $("#title").text("深度阅读");
            $("#content1").text("碎片化的阅读、拼图式思考，被快餐文化裹挟的我们，该如何让沉浸取代浮躁，让踏实取代肤浅？");
            $("#content2").text("答案是：寻找答案本身就是答案！");
            break;
        case 5:
            $("#title").text("一站式购买");
            $("#content1").text("在答案商店找到有你想要的答案的书目便可一键加入购物车，如果你想要有朋友珍贵印记的旧书，你也可以在书店找到。");
            $("#content2").text("不只卖书，只卖你需要的书！");
            break;
        default:
            $("#title").text("记录阅读");
            $("#content1").text("在“我的答案”中可以查看自己的问题与回答，记录你在书海畅游的点点滴滴......");
            $("#content2").text("每个人都有答案，也许没有");
            break;
          }
        currentNum=step.substr(6,1)-0+1;

    });


    //slideshow style interval
    var autoSwap = setInterval( swap,5000);
    var currentNum = 2;
    //pause slideshow and reinstantiate on mouseout
    $('#read-more a, #steps-menu a').hover(
      function () {
        clearInterval(autoSwap);
    },
      function () {
       autoSwap = setInterval( swap,5000);
    });

    //swap images function
    function swap(action) {
      $("#bbp").fadeOut(100);

        console.log(currentNum);
        $("#steps-menu li a:eq("+ (currentNum-1) +")").parent().addClass("is-active");
        $("#steps-menu li a:eq("+ (currentNum-1) +")").parent().siblings().removeClass("is-active");
        var step = $("#steps-menu li a:eq("+ (currentNum-1) +")").attr("href");
        $(".step-content").not(step).css("display", "none");
        $(step).fadeToggle();

        // Rotates the wheel
        $("#steps-menu").removeClass();
        var stepClass = step.charAt(6);
        $("#steps-menu").addClass("step-" + stepClass);

        switch(currentNum){
            case 1:
            $("#title").text("获得问题推荐");
            $("#content1").text("你在社区里问任何你能想到的问题，它们可能很奇怪也可能很深奥，这里的朋友会告诉你书中的答案。");
            $("#content2").text("让我们一起来探索和破译吧！");
            break;
        case 2:
            $("#title").text("结交书友");
            $("#content1").text("你可能会遇见爱同一本书的人、拥有同样困惑的人......你的烦恼或许是我的烦恼，你在读的书或许也能帮助到我。合抱之木，生于毫末。");
            $("#content2").text("我知道你也喜欢读书！");
            break;
        case 3:
            $("#title").text("培养阅读习惯");
            $("#content1").text("如果主动走入书本堆叠的世界需要一个理由，那就让探寻答案成为你的指引，你不需要别人的答案");
            $("#content2").text("自己便可以探寻！");
            break;
        case 4:
            $("#title").text("深度阅读");
            $("#content1").text("碎片化的阅读、拼图式思考，被快餐文化裹挟的我们，该如何让沉浸取代浮躁，让踏实取代肤浅？");
            $("#content2").text("答案是：寻找答案本身就是答案！");
            break;
        case 5:
            $("#title").text("一站式购买");
            $("#content1").text("在答案商店找到有你想要的答案的书目便可一键加入购物车，如果你想要有朋友珍贵印记的旧书，你也可以在书店找到。");
            $("#content2").text("不只卖书，只卖你需要的书！");
            break;
        default:
            $("#title").text("记录阅读");
            $("#content1").text("在“我的答案”中可以查看自己的问题与回答，记录你在书海畅游的点点滴滴......");
            $("#content2").text("每个人都有答案，也许没有");
            break;
        }


        $("#bbp").fadeIn(800);


        currentNum+=1;
        if(currentNum==7) {
            currentNum=1;
        }


    }

});
