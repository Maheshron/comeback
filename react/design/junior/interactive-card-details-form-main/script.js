function myFunction(){
    var value = document.getElementById('cvv').value;
    
    document.getElementById('showcvv').innerHTML = value;
}

function showName(){
    var text = document.getElementById('name').value;
    document.getElementById('showname').innerText = text;
}

function expiry(){
    var value = document.getElementById('expiry-date').value;
    document.getElementById('exd').innerText = value;
}

function expirymonth(){
    var value = document.getElementById('expiry-month').value;
    document.getElementById('exm').innerText = value;
}

document.getElementById('card').addEventListener('input',function(e){
   var arr = [];
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g,'$1 ').trim();
    arr.push(e.target.value)
    var newarr = arr[0].split(" ");

    var count = 0;
    for(var i = 1;i <= 5;i++){
        
        document.getElementById(`first${i}`).innerText = newarr[count];
        count = count + 1;
    }
});