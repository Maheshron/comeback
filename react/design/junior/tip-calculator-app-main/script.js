
function tip(num){
    var button = document.getElementById(`${num}`);
    button.style.backgroundColor = "lightcyan";
    button.style.color = "teal";
    var bill =   Number(document.getElementById('bill').value);
    var persons = Number(document.getElementById('people').value);
    var total = bill/persons;
    var tip   = (total * num)/100;
    var tipshare = tip/persons  ;
    var tip_amount = document.getElementById('tip_amount');
    tip_amount.textContent = Math.floor(tipshare);
    var total_amount = document.getElementById('total_amount');
    total_amount.textContent = Math.floor(total);
    
      
}

function reset(){
    document.getElementById('bill').value = "";
    document.getElementById('people').value = "";
    document.getElementById('tip_amount').textContent = 0;
    document.getElementById('total_amount').textContent = 0;
}