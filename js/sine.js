const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const wave = {
    y: canvas.height,
    length: 0.051,
    amplitude: 60,
    frequency: 0.0004
}

let increment = wave.frequency;

ctx.translate(canvas.width / 2.15, - canvas.height / 1.42);
ctx.rotate(35 * Math.PI / 180);
ctx.translate(0, 0);

function animate() {
    requestAnimationFrame(animate);

    // outer fragment

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgb(23,109,81)');
    gradient.addColorStop(Math.abs(Math.sin(increment)), 'rgb(31,180,141)');
    gradient.addColorStop(1, '#14725a');

    // ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(-100, -100);

    for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(i, wave.y + Math.sin(i * wave.length + increment * 2 ) * wave.amplitude);
    }
    ctx.lineTo(canvas.width, 0);
    ctx.lineTo(0, 0);
    // ctx.fillStyle = `rgba(0, ${150 + Math.sin(increment) * 50}, 100, 1)`;
    ctx.fillStyle = gradient;
    ctx.shadowColor = 'rgba(35, 92, 77, .71)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.fill();

    // gradient.draw();

    ctx.strokeStyle = `hsl(130, ${40 + Math.abs(Math.sin(increment))}%, 50%)`;
    // ctx.stroke();

    // inner fragment

    const gradient2 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient2.addColorStop(0, '#23d2a7');
    gradient2.addColorStop(Math.abs(Math.sin(increment)), '#21a279');
    gradient2.addColorStop(1, '#23d2a7');
    ctx.beginPath();

    ctx.moveTo(0, wave.y * .85 + Math.sin(increment) * 10);
    let j = 0;
    for (let i = 0; i < canvas.width * 2; i++) {
        j = i;
        if (i > canvas.width) {
            // right to left path
            ctx.lineTo( canvas.width - (i - canvas.width), wave.y * 0.45 + Math.sin(-i * wave.length * 1.5 + increment) * wave.amplitude);
        } else {
            // left to right path
            ctx.lineTo(i, wave.y * .85 + Math.sin(i * -wave.length * 2 + increment) * wave.amplitude);
        }
    }
    // ctx.translate(0, Math.sin(increment*10 +1) / 2);
    ctx.lineTo(0, wave.y * .85 + Math.sin(increment) * 10);
    ctx.lineTo(0, 0);
    // ctx.fillStyle = `rgba(0, ${150 + Math.sin(increment) * 50}, 100, 1)`;
    // ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';

    ctx.shadowColor = 'rgba(35, 92, 77, .71)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.fillStyle = gradient2;
    ctx.fill();
    ctx.strokeStyle = 'black';
    // ctx.stroke();

    increment += wave.frequency;
    // wave.length = Math.sin(increment) / 100 + 0.002;
    wave.length = Math.sin(increment + wave.length) / 100;
}

animate();