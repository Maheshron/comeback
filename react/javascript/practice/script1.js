 let spike =  document.querySelector(".spike");
 var number = 5;
//  const myInterval = setInterval(myTimer,1000);

//  clearInterval(myInterval);

function hit(){
            
    var random = Math.floor(Math.random()* 100);
    spike.style.height = random + "px";
    
}

  
   const myTime =     setInterval(hit,1000);
  
function stop1(){
    clearInterval(myTime);
}

