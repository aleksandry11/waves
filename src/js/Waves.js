import { waves, canvasConfig } from "./config";
import Wave from "./Wave";

export default class Waves {
    constructor(canvas) {
        this.canvas = canvas;
        this.c = this.canvas.getContext('2d');
        this.applySettings();

        this.waves = this.createWaves();

        this.launch = this.launch.bind(this);
        this.launch();
    }

    launch() {
        requestAnimationFrame(this.launch);

        const { x, y, deg } = canvasConfig;

        this.canvas.style.transform = `translate(${x}px, ${y}px) rotate(${deg}deg)`;
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.waves.length; i++) {
            if (i === 3) {
                this.waves[i].inc += this.waves[i].config.frequency;
                break;
            }
            this.waves[i].draw();
            if (i === 2) {
                this.waves[i + 1].draw();
            }
        }

    }

    createWaves() {
        let wavesArray = [];
        for (let i = 0; i < waves.length; i++) {
            let wave = new Wave(this.c, waves[i], this.canvas.width, this.canvas.height);
            wavesArray.push(wave);
        }
        return wavesArray;
    }

    applySettings() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight + 100;
    }

}