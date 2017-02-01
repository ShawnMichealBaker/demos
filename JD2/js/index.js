/**
 * Created by jf on 2017/1/1.
 */

//关闭广告部分
var closeEventBanner = document.getElementById("closeEventBanner");
var eventBanner = document.getElementById("eventBanner");
closeEventBanner.onclick = function () {
    animate(eventBanner, {"opacity": 0}, function () {
        eventBanner.style.display = "none";
    });
};
//搜索部分
var key = document.getElementById("key");
key.onfocus = function () {
    if (this.value === "平板二合一") {
        this.value = "";
        this.style.color = "#000";
    }
};
key.onblur = function () {
    if (this.value === "") {
        this.value = "平板二合一";
        this.style.color = "#999";
    }
};
//生活服务
var serviceList = document.getElementById("serviceList");
var icons = serviceList.getElementsByTagName("i");
for (var i = 0; i < icons.length; i++) {
    icons[i].style.background = "url(images/sprite.png) " + (-(i % 4) * 44) + "px " + (-Math.floor((i / 4)) * 44) + "px no-repeat";
}
//轮播图
var slider = document.getElementById("mainSlider");
var img = slider.children[0].children[0];//图片
var btns = slider.children[1].children;//按钮
var left = slider.children[2].children[0];//左按钮
var rigth = slider.children[2].children[1];//右按钮
var index = 0;
//左箭头
rigth.onclick = function () {
    if (index < btns.length - 1) {
        index++;
    } else {
        index = 0;
    }
    for (var i = 0; i < btns.length; i++) {
        btns[i].className = "";
    }
    btns[index].className = "current";
    animate(img, {"opacity": 0}, function () {
        img.src = "images/slider/" + index + ".jpg";
        animate(img, {"opacity": 1});
    });
};
//右箭头
left.onclick = function () {
    if (index > 0) {
        index--;
    } else {
        index = btns.length - 1;
    }
    for (var i = 0; i < btns.length; i++) {
        btns[i].className = "";
    }
    btns[index].className = "current";
    animate(img, {"opacity": 0}, function () {
        img.src = "images/slider/" + index + ".jpg";
        animate(img, {"opacity": 1});
    });
};
//按钮
for (var i = 0; i < btns.length; i++) {
    btns[i].idx = i;
    btns[i].onmouseover = function () {
        index = this.idx;
        for (var i = 0; i < btns.length; i++) {
            btns[i].className = "";
        }
        btns[index].className = "current";
        animate(img, {"opacity": 0}, function () {
            img.src = "images/slider/" + index + ".jpg";
            animate(img, {"opacity": 1});
        });
    };
}
//自动播放
var timer = setInterval(function () {
    rigth.onclick();
}, 5000);
slider.onmouseover = function () {
    clearInterval(timer);
};
slider.onmouseout = function () {
    timer = setInterval(function () {
        rigth.onclick();
    }, 3000);
};
//倒计时
var endTime = +new Date();
endTime = new Date(endTime + 3700000);
//默认一小时多一点 可以自定义时间 但不能超过一天
//endTime = new Date("2017/01/02 19:30:00");
//console.log(endTime);
var countDown = document.getElementById("countDown");
var elementH = countDown.children[0];
var elementM = countDown.children[2];
var elementS = countDown.children[4];
setInterval(function () {
    var now = new Date();
    var result = Math.floor((endTime.getTime() - now.getTime()) / 1000);
    var second = Math.floor(result % 60);
    elementS.innerHTML = second < 10 ? "0" + second : second;
    var minute = Math.floor(result / 60 % 60);
    elementM.innerHTML = minute < 10 ? "0" + minute : minute;
    var hour = Math.floor(result / 3600 % 24);
    elementH.innerHTML = hour < 10 ? "0" + hour : hour;
}, 1000);





