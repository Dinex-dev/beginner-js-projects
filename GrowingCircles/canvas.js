const cv = document.querySelector("#cv");
cv.height = window.innerHeight;
cv.width = window.innerWidth;
window.addEventListener("resize", () => {
    cv.height = window.innerHeight;
    cv.width = window.innerWidth;
    init(800)
})


const c = cv.getContext('2d');

function Circle(x, y, dx, dy, color, radius, maxRadius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.orignalRad = radius;
    this.maxRadius = maxRadius;
    this.draw = () => {
        c.beginPath()
        c.fillStyle = color;
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        c.fill()
    }
    this.update = () => {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw()
        if (mouse.x - this.x < 50 && this.x - mouse.x < 50 &&
            mouse.y - this.y < 50 && this.y - mouse.y < 50) {
            if (this.radius < this.maxRadius) {
                this.radius += 1
            }
        } else if (this.radius > this.orignalRad) {
            this.radius -= .5
        }
    }
}
mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener("mousemove", (ev) => {
    mouse.x = ev.x
    mouse.y = ev.y
})

function init(count) {
    circles = new Array()
    for (let i = 0; i < count; i++) {
        color = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()})`;
        radius = Math.random() * 10 + 5;
        x = Math.random() * (innerWidth - radius * 2) + radius;
        y = Math.random() * (innerHeight - radius * 2) + radius;
        dx = (Math.random() - 0.5) * 2
        dy = (Math.random() - 0.5) * 2
        maxRadius = 50;
        circles.push(new Circle(x, y, dx, dy, color, radius, maxRadius))
    }
    animate()
}
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)
    circles.map((circle) => {
        circle.update()
    })

}
init(800)