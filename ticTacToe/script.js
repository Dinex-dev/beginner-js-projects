count = "O"

function checkWin(){
    var gridItems = document.querySelectorAll(".grid-item")
    for (let i = 0; i < 8; i+=3) {
        if (gridItems[i].innerHTML==gridItems[i+1].innerHTML==gridItems[i+2].innerHTML){
            console.log("win");
        }
    }

}

document.querySelectorAll(".grid-item").forEach((element)=>{
    element.addEventListener("click",(ev)=>{
        count = count=="O"?"X":"O"
        element.innerHTML = count
        checkWin()
    })
})