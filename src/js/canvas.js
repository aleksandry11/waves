// import Gradient from './Gradient';
// import GuiHelper from './gui';
// import { waves, canvasConfig } from './config';

import Waves from "./Waves";

const canvas = document.getElementById('canvas');

const waves2 = new Waves(canvas);
// const c = canvas.getContext('2d');
//
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight + 100;
//
// let folders = GuiHelper.create(waves);
//
// let increments = [];
//
// for (let wave of waves) {
//     increments.push(wave.frequency);
// }
//
// // c.translate(canvas.width / 2, canvas.height / 2);
// // c.rotate(30 * Math.PI / 180);
// // c.translate(-210, -200);
// // c.translate(-canvas.width / 2, -canvas.height / 2,);
// // c.translate(340, -340);
//
// function animate() {
//     requestAnimationFrame(animate);
//     canvas.style.transform = `translate(${canvasConfig.x}px, ${canvasConfig.y}px) rotate(${canvasConfig.deg}deg)`;
//     c.clearRect(0, 0, canvas.width, canvas.height);
//
//     for (let j = 0; j < waves.length; j++) {
//         if (j === 3) {
//             increments[j] += waves[j].frequency;
//             break;
//         }
//         c.beginPath();
//         c.moveTo(0, canvas.height / 2);
//         for (let i = 0; i < canvas.width; i++) {
//             let func = i * waves[j].length;
//             let funcByCurve = func / waves[j].curveIndex;
//             let mainPattern = Math.sin(func + increments[j]) / Math.PI * waves[j].curveIndex * waves[j].amplitude - waves[j].lean;
//
//             // bottom wave
//             if (j === 0) {
//                 c.lineTo(i,
//                     waves[j].y + mainPattern * Math.cos(funcByCurve) * Math.cos(funcByCurve * waves[j].curveIndex2) + i / 3
//                     // waves[j].y + Math.sin(func) * waves[j].amplitude - i / waves[j].lean
//                 );
//             } else if (j === 1) { // middle wave
//                 c.lineTo(i,
//                     // waves[j].y + mainPattern * Math.sin(funcByCurve) * Math.sin(funcByCurve * waves[j].curveIndex2)
//                     // waves[j].y + Math.sin(func) * waves[j].amplitude - i / waves[j].lean
//                     waves[j].y + mainPattern * Math.cos(funcByCurve) * Math.sin(funcByCurve + waves[j].curveIndex2) + i / 5
//                     );
//             } else if (j === 2) { // top wave
//                 c.lineTo(i,
//                     // waves[j].y + mainPattern * Math.sin(funcByCurve) * Math.sin(funcByCurve * waves[j].curveIndex2)
//                     // waves[j].y + Math.sin(func) * waves[j].amplitude - i / waves[j].lean
//                     // waves[j].y + Math.sin(func+ increments[j]) / Math.PI * waves[j].curveIndex * waves[j].amplitude - waves[j].lean + i / 25
//                     waves[j].y + mainPattern * Math.sin(funcByCurve) * Math.cos(funcByCurve * waves[j].curveIndex2) + i / 25
//                 );
//             } else {
//                 c.lineTo(i,
//                     waves[j].y + mainPattern * Math.sin(funcByCurve) * Math.cos(funcByCurve * waves[j].curveIndex2)
//                 );
//             }
//         }
//         if (j === 2) {
//             for (let i = canvas.width; i > 0; i--) {
//                 let func = i * waves[j + 1].length;
//                 let funcByCurve = func / waves[j + 1].curveIndex;
//                 let mainPattern = Math.sin(func + increments[j + 1]) / Math.PI* waves[j + 1].curveIndex * waves[j + 1].amplitude - waves[j + 1].lean;
//                 c.lineTo(i,
//                     // waves[j + 1].y + mainPattern * Math.sin(funcByCurve) * Math.sin(funcByCurve * waves[j + 1].curveIndex2)
//                     waves[j + 1].y + mainPattern * Math.sin(funcByCurve) * Math.sin(funcByCurve * waves[j + 1].curveIndex2) + i / -20
//                 );
//             }
//         } else {
//             c.lineTo(canvas.width, 0);
//             c.lineTo(0, 0);
//             // c.shadowColor = 'transparent';
//         }
//         c.shadowBlur = 40;
//         c.shadowOffsetY = 10;
//         c.shadowOffsetX = 10;
//         c.shadowColor = 'rgba(10,90,54,0.3)';
//         // c.stroke();
//         let gr;
//         if (j === 0) {
//             gr = c.createLinearGradient(canvas.width / 2, 0 , canvas.width / 2, canvas.height);
//         } else if (j === 1) {
//             gr = c.createLinearGradient(0, canvas.height / 5, canvas.width, canvas.height * 3);
//         } else if (j === 2) {
//             gr = c.createLinearGradient(canvas.width , canvas.height / 10, canvas.width / 5, canvas.height );
//         } else {
//             gr = c.createLinearGradient(0, 0, canvas.width, canvas.height);
//         }
//         gr.addColorStop(0, `rgb(${waves[j].stops[0].r}, ${waves[j].stops[0].g + Math.sin(increments[j]) * 10}, ${waves[j].stops[0].b})`);
//         gr.addColorStop(0.25, `rgb(${waves[j].stops[1].r}, ${waves[j].stops[1].g + Math.sin(increments[j]) * 10}, ${waves[j].stops[1].b})`);
//         gr.addColorStop(0.5, `rgb(${waves[j].stops[2].r}, ${waves[j].stops[2].g + Math.sin(increments[j]) * 10}, ${waves[j].stops[2].b})`);
//         gr.addColorStop(1, `rgb(${waves[j].stops[3].r}, ${waves[j].stops[3].g + Math.sin(increments[j]) * 10}, ${waves[j].stops[3].b})`);
//         c.fillStyle = gr;
//         c.fill();
//         // gradients[1].updateStops();
//         // gradients[1].draw();
//
//         increments[j] += waves[j].frequency;
//     }
// }
// animate();



