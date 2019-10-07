import * as dat from 'dat.gui';
import { canvasConfig } from './config';

export default class GuiHelper {
    static open(config) {
        const gui = new dat.GUI();
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

        let canvasFolder = GuiHelper.createCanvasSettings(gui, canvasConfig);
        folders.push(canvasFolder);
        
        return folders;
    }

    static addColorStops(folder, obj) {
        for (let i = 1; i < 4; i++) {
            folder.addColor(obj, `color${i}`);
        }
    }

    static createCanvasSettings(gui, config) {
        let folder = gui.addFolder('Canvas');
        folder.add(config, 'x', -1000, 1000);
        folder.add(config, 'y', -1000, 1000);
        folder.add(config, 'deg', -360, 360);
        return folder;
    }
}