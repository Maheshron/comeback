var features = document.getElementById('features');
var company = document.getElementById('company');


var button = document.getElementById('mobile-menu');
var closebutton = document.getElementById('close-menu');

button.addEventListener("click",function(){
    document.getElementById('mobile-menu-open').classList.toggle('mobile-menu-open')
    closebutton.style.display = 'block';
    button.style.display = 'none';
    

})

closebutton.addEventListener("click",function(){
    document.getElementById('mobile-menu-open').classList.toggle('mobile-menu-open');
    button.style.display ='block';
    closebutton.style.display = 'none';

})


features.addEventListener("click",function(){
        var dropdown = document.getElementById('dropdown');
        
        dropdown.classList.toggle("show");
})

company.addEventListener("click",function(){
    var dropdown1 = document.getElementById('dropdown2');
    dropdown1.classList.toggle('show1');
    
})

var submenu = document.getElementById('submenu1');
submenu.addEventListener("click",function(){
    document.getElementById('inner0').classList.toggle('inneropen');
})

var submenu2 = document.getElementById('submenu2');
submenu2.addEventListener('click',function(){
    document.getElementById('inner1').classList.toggle('inneropen1');
})