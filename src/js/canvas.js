import * as dat from 'dat.gui';
import Gradient from './Gradient';
import { waves } from './config';
import GuiHelper from './gui';

const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let folders = GuiHelper.create(waves);

let increments = [];

for (let wave of waves) {
    increments.push(wave.frequency);
}

c.translate(canvas.width / 2, canvas.height / 2);
c.rotate(45 * Math.PI / 180);
c.translate(-200, -200);
c.translate(-canvas.width / 2, -canvas.height / 2,);
c.translate(340, -340);

let gradient = new Gradient(c, canvas.width, canvas.height);

function animate() {
    requestAnimationFrame(animate);
    // c.fillStyle = 'rgba(204, 108, 88, .8)';
    // c.fillRect(0, 0, canvas.width, canvas.height);
    c.clearRect(0, 0, canvas.width, canvas.height);
    

    for (let j = 0; j < waves.length; j++) {
        gradient.addStop(0, waves[j].stopsA);
        gradient.addStop(1, waves[j].stopsB);
        if (j === 3) continue;
        c.beginPath();
        c.moveTo(0, canvas.height / 2);

        for (let i = 0; i < canvas.width; i++) {
            c.lineTo(i,
                waves[j].y + (Math.sin(i * waves[j].length + increments[j]) + Math.sin((i + increments[j] * Math.cos(i * waves[j].length + increments[j])) / waves[j].amplitude)/waves[j].curveIndex) * waves[j].amplitude * Math.sin(increments[j]) - i / waves[j].lean
                // (Math.sin(func.sin * func.multiplier * waves[j].length + increments[j]) * Math.sin(increments[j])) / 10
            );
        }
        if (j === 2) {
            for (let i = canvas.width; i > 0; i--) {
                c.lineTo(i,
                    waves[j + 1].y + Math.sin(i * waves[j + 1].length + increments[j + 1]) * waves[j + 1].amplitude * Math.sin(increments[j + 1]) - i / waves[j + 1].lean
                );
            }
            c.shadowBlur = 40;
            c.shadowOffsetX = 5;
            c.shadowOffsetY = 5;
            c.shadowColor = 'rgba(0, 0, 0, .3)';
            // c.shadowColor = `rgba(35, 21, 167, ${Math.abs(Math.sin(increments[j]))})`;
        } else {
            c.lineTo(canvas.width, 0);
            c.lineTo(0, 0);
            c.shadowColor = 'transparent';
        }
        // const gradient = c.createLinearGradient(0, 0, canvas.width, canvas.height);
        
        // for (let i = 1; i <= waves[j].stops.length; i++) {
        //     gradient.addColorStop(1 / i, waves[j].stops[i - 1]);
        // }
        // c.fillStyle = gradient;
        // gradient.addColorStop(0, waves[j].fill);
        // gradient.addColorStop(Math.pow(Math.sin(increments[j]), 2), '#2B9D7F');
        // gradient.addColorStop(Math.abs(Math.sin(increments[j])), '#3EB2A4');
        // gradient.addColorStop(1 - Math.abs(Math.sin(increments[j])), '#068b7a');
        // gradient.addColorStop(1, waves[j + 1].fill);
        // c.fillStyle = waves[j].fill;
        // gradient = new Gradient(c, canvas.width, canvas.height);
        // gradient.addStop(0, stopAColor);
        // gradient.addStop(1, stopBColor);
        // gradient.draw();
        // c.fill();
        gradient.updateStops();

    gradient.draw();
       
    }


    for (let i = 0; i < waves.length; i++) {
        increments[i] += waves[i].frequency;
    }

}

animate();



