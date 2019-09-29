class Gradient {
    constructor(context, width, height) {
        this.c = context;
        this.width = width;
        this.height = height;
        this.colorStops = [];
        this.currentStop = 0;
    }

    addStop(pos, colors) {
        const stop = {pos: pos, colors: colors, currentColor: null}
        this.colorStops.push(stop);
    }

    updateStops() {
        let steps = Anim.duration / Anim.interval,
            step_u = Anim.stepUnit / steps,
            stopsLength = this.colorStops[0].colors.length - 1;

        for (let i = 0; i < this.colorStops.length; i++) {
            let stop = this.colorStops[i],
                startColor = stop.colors[this.currentStop],
                endColor, r, g, b;

            if (this.currentStop < stopsLength) { // get stop 2 color, go to first if at last stop
                endColor = stop.colors[this.currentStop + 1];
            } else {
                endColor = stop.colors[0];
            }

            // interpolate both stop 1 & 2 colors to get new color based on animation unit
            r = Math.floor(lerp(startColor.r, endColor.r, Anim.currentUnit));
            g = Math.floor(lerp(startColor.g, endColor.g, Anim.currentUnit));
            b = Math.floor(lerp(startColor.b, endColor.b, Anim.currentUnit));

            stop.currentColor = `${r}, ${g}, ${b}`;
        }

        // update current stop and animation units if interpolation is complete
        if (Anim.currentUnit >= 1.0) {
            Anim.currentUnit = 0;
            if (this.currentStop < stopsLength) {
                this.currentStop++;
            } else {
                this.currentStop = 0;
            }
        }

        Anim.currentUnit += step_u; // increment animation unit
    }

    draw() {
        const gradient = this.c.createLinearGradient(0, 0, this.width, this.height);
        for (let i = 0; i < this.colorStops.length; i++) {
            let stop = this.colorStops[i],
                pos = stop.pos,
                color = stop.currentColor;
            gradient.addColorStop(pos, 'rgb(' + color + ')');
        }

        // this.c.clearRect(0, 0, this.width, this.height);
        this.c.fillStyle = gradient;
        // this.c.fillRect(0, 0, this.width, this.height);
        this.c.fill();  
    }
}

const Anim = {
    duration: 6000,
    interval: 0.5,
    stepUnit: 1.0,
    currentUnit: 0.0
}

function lerp(a, b, u) {
    return (1 - u) * a + u * b;
}

export default Gradient;