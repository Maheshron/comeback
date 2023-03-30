
var shortButton = document.getElementById('shorten');



shortButton.addEventListener("click",function(){

    var result = document.getElementById('result');
  

    var url = document.getElementById('url').value;
    if(url === ""){
        alert("please enter a valid url");
        window.location.reload();
    }
    result.style.display="block";

    var originalurl = document.getElementById('originalurl');
    var shorturl = document.getElementById('resulturl');



    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`).
    then((response) => response.json()).
    then((data) => {
        console.log(data)
        originalurl.textContent = "";

        shorturl.textContent = "";

        originalurl.textContent = url;
        shorturl.textContent = data.result.full_short_link;
  
   
});
   

});

// copybutton.onclick = function(){
//     document.execCommand("copy");
// }

// copybutton.addEventListener("copy",function(event){
//     event.preventDefault();
//     if(event.clipboardData){
//         event.clipboardData.setData("text/plain",copybutton.textContent);
//         console.log(event.clipboardData.getData("text"))
//         copybutton.style.backgroundColor = "darkblue";
//         copybutton.textContent = "copied";
//         console.log('copy')
//     }
// })

function myFunction(){
 var copybutton  = document.getElementById('copy');

    var copyText = document.getElementById("resulturl").innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = copyText;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    copybutton.style.backgroundColor = "#35323e"
    copybutton.innerText = " ";
    
    copybutton.innerText = "Copied";
    
}