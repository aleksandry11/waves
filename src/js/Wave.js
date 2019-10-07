export default class Wave {
    constructor(c, config, width, height) {
        this.config = config;
        this.c = c;
        this.width = width;
        this.height = height;
        this.inc = this.config.frequency;
        this.math = this.config.definingFunctions;
    }

    draw() {
        if (this.config.hasOwnProperty('complexPathEnd') && this.config.complexPathEnd) {
            for (let i = this.width; i > 0; i--) {
                this.c.lineTo(i, this.config.y + this.getFormula(i));
            }
            this.fill();
        } else {
            this.c.beginPath();
            for (let i = 0; i < this.width; i++) {
                this.c.lineTo(i, this.config.y + this.getFormula(i));
            }

            if (!this.config.hasOwnProperty('complexPathStart')) {
                this.c.lineTo(this.width, 0);
                this.c.lineTo(0, 0);
                this.fill();
            }
        }
        this.inc += this.config.frequency;
    }

    fill() {
        this.createShadow(40, 10, 10, 'rgba(10,90,54,0.3)');
        this.createGradient();

        this.c.fill();
    }

    createGradient() {
        let x0, y0, x1, y1;
        if (this.config.hasOwnProperty('gradientPath')) {
            x0 = this.config.gradientPath[0] * this.width;
            y0 = this.config.gradientPath[1] * this.height;
            x1 = this.config.gradientPath[2] * this.width;
            y1 = this.config.gradientPath[3] * this.height;
        } else {
            x0 = 0; y0 = 0;
            x1 = this.width;
            y1 = this.height;
        }

        const gr = this.c.createLinearGradient(x0, y0, x1, y1);

        gr.addColorStop(0, this.createColor(this.config.stops.color0));
        gr.addColorStop(0.25, this.createColor(this.config.stops.color1));
        gr.addColorStop(0.5, this.createColor(this.config.stops.color2));
        gr.addColorStop(1, this.createColor(this.config.stops.color3));

        this.c.fillStyle = gr;
    }

    getFormula(i) {
        const config = {...this.config};

        let func = i * config.length;
        let funcByCurve = func / config.curveIndex;
        let curve = Math.sin(func + this.inc) / Math.PI * config.curveIndex * config.amplitude - config.lean;

        if (config.hasOwnProperty('useAdditionForDefiningFunctions') && config.useAdditionForDefiningFunctions) {
            return curve * this.math[0](funcByCurve) * this.math[1](funcByCurve + config.curveIndex2) + i / config.incline;
        }
        return curve * this.math[0](funcByCurve) * this.math[1](funcByCurve * config.curveIndex2) + i / config.incline;
    }

    createColor(colorArr) {
        const [ r, g, b ] = colorArr;
        return `rgb(${r}, ${g + Math.sin(this.inc)}, ${b})`;
    }

    createShadow(blur, offsetX, offsetY, color) {
        this.c.shadowBlur = blur;
        this.c.shadowOffsetX = offsetX;
        this.c.shadowOffsetY = offsetY;
        this.c.shadowColor = color;
    }
}