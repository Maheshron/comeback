const button = document.getElementById("button");

button.addEventListener("click",function(){
    alert("Hello World");
});


window.addEventListener("click",function(){
    console.log("Window");
},false);
document.addEventListener("click",function(){
    console.log("document");
},false)

document.querySelector(".first_box").addEventListener("click",function(e){
    e.stopPropagation();
    console.log("div 1");
},false)

document.querySelector(".second_box").addEventListener("click",function(){
    console.log("Div 2");
},false)

document.querySelector(".inside_button").addEventListener("click",function(e){
    console.log(e.target.innerText = "clicked Me");
},false)