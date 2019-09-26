const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const MAX_RADIUS = 100;
// const MIN_RADIUS = 2;

const mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', (event) => {
   mouse.x = event.x;
   mouse.y = event.y;
});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.MIN_RADIUS = radius;
    this.fill = `rgba(${getRandomHex()}, ${getRandomHex()}, ${getRandomHex()}, ${Math.random()})`;
    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
    this.update = function() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > - 50 &&
            mouse.y - this.y < 50 && mouse.y - this.y > - 50 &&
            this.radius < MAX_RADIUS
        ) {

            this.radius += 1;
        } else if (this.radius > this.MIN_RADIUS) {
            this.radius -= 1;
        }

        this.draw();
    }
}
function getRandomHex() {
    return Math.floor(Math.random() * 256);
}

let circleArray = [];

function init() {
    circleArray = [];
    for (let i = 0; i < 800; i++) {
        let radius = Math.floor(Math.random() * 50);
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let dx = (Math.random() - 0.5);
        let dy = (Math.random() - 0.5);

        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}
animate();

init();