var button = document.getElementById('submit');
var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');
var span = document.getElementById('s');

var rated_value = 0;
button.addEventListener('click',function(){
        container1.style.display = 'none';
        container2.style.display = 'block';
        
})

function rated(num){
   rated_value = num;
   span.innerText = rated_value;
}