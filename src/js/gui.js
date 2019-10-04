import * as dat from 'dat.gui';
import { canvasConfig } from './config';

const gui = new dat.GUI();

export default class GuiHelper {
    static create(config) {
        let folders = [];

        for (let i = 0; i < config.length; i++) {
            let folder = gui.addFolder(`Wave ${i + 1}`);
            folder.add(config[i], 'y', 0, 2000);
            folder.add(config[i], 'length', 0.0001, 0.05);
            folder.add(config[i], 'amplitude', -200, 200);
            folder.add(config[i], 'frequency', 0.001, 9);
            folder.add(config[i], 'lean', 0.001, 500);
            folder.add(config[i], 'curveIndex', -0.001, 30);
            folder.add(config[i], 'curveIndex2', -0.001, 30);
        
            const colorStops = folder.addFolder('Color Stops');
            GuiHelper.addColorStops(colorStops, config[i].stops);

            folders.push(folder);
        }

        let canvasFolder = GuiHelper.createCanvasSettings(canvasConfig);
        folders.push(canvasFolder);
        
        return folders;
    }

    static addColorStops(folder, array) {
        for (let i = 0; i < 4; i++) {
            let stop = folder.addFolder(`Color ${i + 1}`);
            stop.add(array[i], 'r', 0, 255);
            stop.add(array[i], 'g', 0, 255);
            stop.add(array[i], 'b', 0, 255);
        }
    }

    static createCanvasSettings(config) {
        let folder = gui.addFolder('Canvas');
        folder.add(config, 'x', -1000, 1000);
        folder.add(config, 'y', -1000, 1000);
        folder.add(config, 'deg', -360, 360);
        return folder;
    }
}