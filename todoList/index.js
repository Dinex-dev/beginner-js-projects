

inputBox = document.querySelector("#inputBox");
addButton = document.querySelector("#addTodo");
clearList = document.querySelector("#clearList")
list = document.querySelector("ul");
todo = JSON.parse(localStorage.getItem("todo")) || [];



todo.map((data,index)=>{list.innerHTML += `<li class="list-group-item">${data}<button id="deleteItem"  itemId="${todo.length-index}"><i class='bi bi-x-lg'></i></button></li>`;})



function deleteNode(event){
        todo.splice(todo.length-event.target.getAttribute("itemId"),1)
        event.target.parentNode.remove()
        localStorage.setItem("todo",JSON.stringify(todo))
}

document.querySelectorAll("#deleteItem").forEach(deletebutton=>{
    deletebutton.addEventListener("click",deleteNode);
})

function addTodo(){
    todo.unshift(inputBox.value);
    inputBox.value="";
    li = document.createElement("li")
    li.append(document.createTextNode(todo[0]))
    li.setAttribute("class","list-group-item")
    prevli = document.getElementsByTagName("li")[0]
    list.insertBefore(li,prevli)
    delButton = document.createElement("button")
    delButton.innerHTML="<i class='bi bi-x-lg'></i>"
    delButton.setAttribute("itemId",todo.length)
    delButton.addEventListener("click",deleteNode)
    li.append(delButton)
    localStorage.setItem("todo",JSON.stringify(todo))
}
function clear(){
    todo=[];
    localStorage.clear()
    list.innerHTML = ""
}
inputBox.addEventListener("keypress",(key)=>{
    if (key.keyCode==13){
        addTodo()
    }
})

addButton.addEventListener("click", addTodo);
clearList.addEventListener("click", clear);