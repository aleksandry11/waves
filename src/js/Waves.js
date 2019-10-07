import { waves, canvasConfig } from "./config";
import Wave from "./Wave";
import GuiHelper from "./gui";

export default class Waves {
    constructor(canvas, useGui = false) {
        this.canvas = canvas;
        this.c = this.canvas.getContext('2d');
        this.applySettings();

        this.waves = this.createWaves();

        this.launch = this.launch.bind(this);
        this.launch();

        if (useGui) {
            GuiHelper.open(waves);
        }
    }

    launch() {
        requestAnimationFrame(this.launch);

        const { x, y, deg } = canvasConfig;

        this.canvas.style.transform = `translate(${x}px, ${y}px) rotate(${deg}deg)`;
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.waves.length; i++) {
            this.waves[i].draw();
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