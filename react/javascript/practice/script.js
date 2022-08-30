const box = document.getElementById("main-heading");
box.style.backgroundColor = "teal";
console.log(box);


const listItems = document.getElementsByClassName("list-items");
console.log(listItems);

const ul = document.querySelector('ul');

const li = document.createElement("li");
li.innerText = "Animate React";

ul.append(li);