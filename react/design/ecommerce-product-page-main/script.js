const image = document.getElementById("main-frame");
const changeValue = document.getElementById("priceChange");
const sideNav = document.getElementById('mobile-nav-bar');


var cartItem = 0;

var value = 0;
    function openbox(){
        
        if(value === 0){
        document.getElementById('cart-box').removeAttribute('class','utility');
        document.getElementById('cart-box').classList.toggle('cart-box');
        console.log()
            value = 1;
    }
        else{
            document.getElementById('cart-box').classList.add('utility');
            value = 0;
        }
    }

    function opensidenav(){
        sideNav.classList.add('mobile-nav-bar');
        sideNav.removeAttribute('id');
    }

    function closenav(){
        sideNav.removeAttribute('class');
        sideNav.classList.remove('mobile-nav-bar');
        sideNav.setAttribute('id','mobile-nav-bar');
    }


function changeImage(id){
    var num = Number(id);
    
    var singleImage = document.getElementById(`image${num}`);
    singleImage.style.border = "3px solid orange";
    singleImage.style.opacity = "0.8";
   
    var images = {
        1:"./images/image-product-1.jpg",
        2:'./images/image-product-2.jpg',
        3:'./images/image-product-3.jpg',
        4:'./images/image-product-4.jpg'
    };
    image
    image.removeAttribute("src");
    image.setAttribute("src",images[id]);
    image.style.src = `${images[id]}`;
    

   
}

function increment(){
    cartItem = cartItem + 1 ;
    changeValue.innerText = cartItem;
}

function decrement(){
    if(cartItem <= 0){
        alert('please add alteast a item');
    }
    cartItem = cartItem - 1;
    changeValue.innerText = cartItem;
}