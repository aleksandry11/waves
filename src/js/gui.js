import * as dat from 'dat.gui';

export default class GuiHelper {
    static create(config) {
        const gui = new dat.GUI();
        let folders = [];

        for (let i = 0; i < config.length; i++) {
            let folder = gui.addFolder(`Wave ${i + 1}`);
            folder.add(config[i], 'y', 0, canvas.height);
            folder.add(config[i], 'length', -0.3, 0.1);
            folder.add(config[i], 'amplitude', -300, 300);
            folder.add(config[i], 'frequency', 0.001, 1);
            folder.add(config[i], 'lean', -30, 300);
            folder.add(config[i], 'curveIndex', -100, 100);
        
            const colorStop1 = folder.addFolder('Color Stop 1');
            GuiHelper.addColorStops(colorStop1, config[i].stopsA);
        
            const colorStop2 = folder.addFolder('Color Stop 2');
            GuiHelper.addColorStops(colorStop2, config[i].stopsB);

            folders.push(folder);
        }
        
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
}