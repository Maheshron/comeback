    document.querySelector("button").addEventListener("click",function(){
        var div = document.querySelector(".modal-container");
        var div1 = document.querySelector(".modal");
        div1.classList.add("show");
        div.classList.add("show");
    
    });

    document.querySelector(".close").addEventListener("click",function(){
        var div = document.querySelector(".modal-container");
        var div1 = document.querySelector(".modal");
        div1.classList.remove("show");
        div.classList.remove("show");
    });