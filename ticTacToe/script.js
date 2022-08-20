count = "O"
gameStatus = document.querySelector(".gameStatus")
gamebox = document.querySelector(".gamebox")

function win(item){
    if(item!=""){
        gameStatus.innerHTML = count + " won"
        gamebox.replaceWith(gamebox.cloneNode(true))
    }
}

function checkWin() {
    let gridItems = []
    document.querySelectorAll(".grid-item").forEach((item) => {
        gridItems.push(item.innerHTML)
    })
    for (let i = 0; i < 3; i++) {
        if (gridItems[i] == gridItems[i + 3] && gridItems[i] == gridItems[i + 6]) {
            win(gridItems[i])
        }
        if(gridItems[i*3]==gridItems[i*3+1] && gridItems[i*3]==gridItems[i*3+2]){
            win(gridItems[i*3])
        }
    }
    if((gridItems[0]==gridItems[4] && gridItems[0]==gridItems[8])||(gridItems[2]==gridItems[4] && gridItems[2]==gridItems[6])){
        win(gridItems[4])
    }
    if(gridItems.includes("")==false){
        gameStatus.innerHTML = "Draw";
    }
}

document.querySelectorAll(".grid-item").forEach((element) => {
    element.addEventListener("click", () => {
        gameStatus.innerHTML = "Player " + count + " turn"
        count = count == "O" ? "X" : "O"
        element.innerHTML = count
        element.classList.add(count)
        element.replaceWith(element.cloneNode(true))
        checkWin()
    })
})