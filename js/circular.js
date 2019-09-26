const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

function Particle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05;
    this.distanceFromCenter = Math.floor(Math.random() * 120 + 50);
    this.lastMouse = {x: x, y: y};
    this.fill = `rgba(${getRandomHex()}, ${getRandomHex()}, ${getRandomHex()}, ${Math.random()})`;

    this.draw = function(lastPoint) {
        ctx.beginPath();
        ctx.strokeStyle = this.fill;
        ctx.lineWidth = this.radius;
        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        ctx.closePath();
    }

    this.update = function() {
        const lastPoint = {x: this.x, y: this.y};

        // Move points over time
        this.radians += this.velocity;

        // Drag
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

        // Circular Motion
        this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;

        this.draw(lastPoint);
    }
}

function getRandomHex() {
    return Math.floor(Math.random() * 200);
}

let particles = [];

function init() {
    particles = [];
    for (let i = 0; i < 50; i++) {
        let radius = (Math.random() * 2) + 1;
        let x = canvas.width / 2;
        let y = canvas.height / 2;

        particles.push(new Particle(x, y, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let item of particles) {
        item.update();
    }
}
animate();

init();