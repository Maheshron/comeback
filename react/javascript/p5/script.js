var input = document.getElementById("add-task");
var taskContainer = document.getElementById("tasks");
var add1 = document.getElementById("add");
var inc = 0;
add1.addEventListener("click",function(){
    
    let task = document.createElement("div");
    task.classList.add("task");
    
    let li = document.createElement("li");
    li.innerText = `${input.value}`;
    task.append(li);

    let checkButton = document.createElement("button");
    checkButton.classList.add("check");
    checkButton.innerText = "Done";

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "Delete";
    task.append(checkButton);
    task.append(deleteButton);
    taskContainer.append(task);
    input.value = "";

    checkButton.addEventListener("click",function(){
        checkButton.parentElement.firstChild.style.textDecoration = "line-through";
       console.log(checkButton.parentElement.firstChild);
      
    });

    deleteButton.addEventListener("click",function(e){
        let target = e.target;
       
        target.parentElement.remove();
    })
});

