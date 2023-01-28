var project = document.getElementById('backproject');
project.addEventListener("click",function(){
    var popup = document.getElementById('popup');
    popup.style.display = "block";
})

var closebutton = document.getElementById("close");
    closebutton.addEventListener("click",function(){
        var popup = document.getElementById('popup');
        popup.style.display = "none";
    })

var circleone = document.getElementById("circleone");

circleone.addEventListener("click",function(){
    var innerbox2 = document.getElementById('inner-box2');
    innerbox2.classList.toggle('show');
    var innercircleone = document.getElementById('innercirlceone');
    innercircleone.classList.toggle('show');
    var innercirlce = document.getElementById('innercirlceone');
    var parent = this.parentNode;
    var mainparent = parent.parentNode.parentNode;
    mainparent.style.border = "2px solid darkcyan";
    innercirlce.style.backgroundColor = 'darkcyan';
})

var continue1 = document.getElementById("continue");
continue1.addEventListener("click",function(){
    var popup = document.getElementById('popup');
    popup.style.display = "none";
    var thankyou = document.getElementById("thankyou")
    thankyou.style.display  = "block";
})

var hamclose = document.getElementById('closehamburger');
var mobilemenu = document.getElementById('mobile-menu');

var hamopen = document.getElementById("hamburger");
hamopen.addEventListener("click",function(){
    hamopen.style.display = "none";
    mobilemenu.style.display = "block";
    hamclose.style.display = "block";
})

hamclose.addEventListener("click",function(){
    hamclose.style.display="none";
    mobilemenu.style.display = "none";

    hamopen.style.display = "block";
})