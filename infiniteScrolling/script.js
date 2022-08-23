let link = "https://zenquotes.io/api/quotes";
const api_url = "https://zenquotes.io/api/quotes/";
const app = document.querySelector(".app")
const box = document.createElement("div")
box.setAttribute("class", "box")
let contentNumber = 1;

function SetRandomColor(content) {
    r = Math.random() * 255;
    g = Math.random() * 255;
    b = Math.random() * 255;
    content.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
    content.style.color = hsp>127.5?"black":"white"
    return content.cloneNode(true)
}

function makeContent(root, content, count) {
    for (let i = 0; i < count; i++) {
        content.innerHTML = contentNumber++;
        root.append(SetRandomColor(content))
    }
}
makeContent(app, box, 20)
window.addEventListener("scroll", () => {
    if (document.querySelector("html").offsetHeight - window.innerHeight - window.pageYOffset == 0) {
        makeContent(app, box, 10)
    }
})