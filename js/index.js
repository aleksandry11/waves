const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let counter = 0;

const init = setInterval(() => {
    counter++;
    if (counter > 500) {
        clearCanvas();
        counter = 0;
    }
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const radius = Math.random() * Math.random() * 100;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = `rgba(${getRandomHex()}, ${getRandomHex()}, ${getRandomHex()}, ${Math.random()})`;
    ctx.fill();
    ctx.globalAlpha = Math.random();
    ctx.stroke();
}, 50);

function getRandomHex() {
    return Math.floor(Math.random() * 256);
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener('click', () => clearCanvas());
  