


var search = document.getElementById("search");


var lat = "17.411";
var lang = "78.4487";

search.addEventListener("click",function(){
var inputField = document.getElementById('ipvalue').value;

if(inputField === ""){
    alert("please Enter a value");
    window.location.reload();
}

var ipAddress = document.getElementById('ipaddress');
var location = document.getElementById('location');
var time = document.getElementById('timezone');
var isp = document.getElementById('isp');
var lat = "";
var lang = "";
// fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_piHnYHlljJQdrzTNe8YgAMLWqB1yl&ipAddress=${inputField}`).
// then((response) => response.json()).
// then((data) =>{
//     ipAddress.textContent = data.ip;
//     location.textContent = data.location.country + "- " + data.location.region;
//     time.textContent = "UTC "+data.location.timezone;
//     if(data.isp === ""){
//         data.isp = "Spacex StarLink"
//     }
//     isp.textContent = data.isp;
//     console.log(data);
//     document.getElementById('ipvalue').value = "";
// });

fetch(`http://ip-api.com/json/${inputField}`).
then((response) => response.json()).
then((data) => {
    console.log(data);
    ipAddress.textContent = inputField;
    location.textContent = data.country + " " + data.city;
    time.textContent = data.timezone;
    isp.textContent = data.isp;
    lat = data.lat;
    lang = data.lon;
    console.log(lat + " "+ lang)
    show(lat,lang)
})

   
})

function show(lat,lang){
    document.getElementById('ipmap').innerHTML = "<div id='map' style='width:100%;height:100%' ></div>";
   
    var map = L.map('map').setView([lat,lang], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

L.marker([lat,lang]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

}
