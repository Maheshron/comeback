const container = document.getElementById("container");

var colors = ['#e74c3c','#8e44ad','#3498db','#e67e22','#2ecc71'];

var check = [];
var count = 0;
const squares = 12;
for(var i = 0;i < squares;i++){

    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute('id',i);
    container.appendChild(square);
    square.addEventListener("click" ,() =>changeColor(square));
}


function changeColor(div){
    var random = colors[Math.floor(Math.random() * colors.length)];
    div.style.backgroundColor = random;
    var id = div.getAttribute("id");
    check.push({"color":random,"id":id});
    if(check.length === 2 && count === 2){
        
        validateBox()
    }
    else{
        count++;
        if(count === 2){
          var div1 =   document.querySelectorAll('.square');
         // div1.style.backgroundColor = "black";
        }
    }
   
}

function validateBox(){
    if(check[0].color === check[1].color){
        var id = check[0].id;
        var id2 = check[1].id;
        document.getElementById(`${id}`).style.display = "none";
        document.getElementById(`${id2}`).style.display = "none";
    }
}
