const canvas = document.querySelector("#myCanvas")
const context = canvas.getContext("2d");

clearCanvas = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
}
const Draw = (part) => {
    switch (part) {
        case 'gallows':
            context.strokeStyle = '#444';
            context.lineWidth = 10;
            context.beginPath();
            context.moveTo(175, 225);
            context.lineTo(5, 225);
            context.moveTo(40, 225);
            context.lineTo(25, 5);
            context.lineTo(100, 5);
            context.lineTo(100, 25);
            context.stroke();
            break;

        case 'head':
            context.lineWidth = 5;
            context.beginPath();
            context.arc(100, 50, 25, 0, Math.PI * 2, true);
            context.closePath();
            context.stroke();
            break;

        case 'body':
            context.beginPath();
            context.moveTo(100, 75);
            context.lineTo(100, 140);
            context.stroke();
            break;

        case 'rightHarm':
            context.beginPath();
            context.moveTo(100, 85);
            context.lineTo(60, 100);
            context.stroke();
            break;

        case 'leftHarm':
            context.beginPath();
            context.moveTo(100, 85);
            context.lineTo(140, 100);
            context.stroke();
            break;

        case 'rightLeg':
            context.beginPath();
            context.moveTo(100, 140);
            context.lineTo(80, 190);
            context.stroke();
            break;

        case 'rightFoot':
            context.beginPath();
            context.moveTo(82, 190);
            context.lineTo(70, 185);
            context.stroke();
            break;

        case 'leftLeg':
            context.beginPath();
            context.moveTo(100, 140);
            context.lineTo(125, 190);
            context.stroke();
            break;

        case 'leftFoot':
            context.beginPath();
            context.moveTo(122, 190);
            context.lineTo(135, 185);
            context.stroke();
            break;
    }
}
const draws = [
    'gallows',
    'head',
    'body',
    'rightHarm',
    'leftHarm',
    'rightLeg',
    'leftLeg',
    'rightFoot',
    'leftFoot',
]
step = 0
wordBox = document.querySelector(".wordBox")
alphabetBox = document.querySelector(".alphabetBox")
livesBox = document.querySelector(".livesBox")
lives = 10
livesBox.innerHTML = `Guess left : ${lives}`
word = "hangman"
word = word.toUpperCase()
word = word.split("")
letters = []
for (let i = 65; i < 91; i++)
    letters.push(String.fromCharCode(i))


letters.map((letter) => {
    alphabetBox.innerHTML += `<div class="letter">${letter}</div>`
})

for (let i = 0; i < word.length; i++) {
    wordBox.innerHTML += `<div class ="hidden-text visible"></div>`
}

alphabetBox.childNodes.forEach((alphabet) => {
    alphabet.addEventListener("click", () => {
        var new_element = alphabet.cloneNode(true);
        alphabet.parentNode.replaceChild(new_element, alphabet);
        alphabet = new_element;
        if (lives) {
            if (word.includes(alphabet.innerHTML)) {
                alphabet.classList.add("correct")
                word.map((letter, index) => {
                    if (letter == alphabet.innerHTML) {
                        wordBox.childNodes[index].innerHTML = letter
                        wordBox.childNodes[index].classList.remove("hidden-text")
                    }
                })
            } else {
                alphabet.classList.add("wrong")
                lives--
                Draw(draws[step++])
            }
            livesBox.innerHTML = lives ? `Guess left : ${lives}` : `Game Over`
            if (!wordBox.innerHTML.includes("hidden-text")) {
                livesBox.innerHTML = "You Win"
                lives = 0
            }

        }
    })
})