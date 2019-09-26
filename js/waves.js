const gui = new dat.GUI();

const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const waves = [
    {
        y: 620,
        length: 0.004,
        amplitude: -154,
        frequency: 0.001,
        lean: -15,
        color: 62,
        fill: '#259278',
        stops: ['#327f6a', '#33806b', '#2f7b68', '#3e8d75']
    },
    {
        y: 759,
        length: 0.003,
        amplitude: 163,
        frequency: 0.001,
        lean: 21,
        color: 0,
        fill: '#1d8173',
        stops: ['#76cfa5', '#3738b4', '#2d917d', '#7ad2a7']
    },
    {
        y: 844,
        length: 0.009,
        amplitude: 43,
        frequency: 0.001,
        lean: 2.9,
        color: 208,
        fill: '#23d2a7',
        stops: ['#76cfa5', '#57b495', '#2d917d', '#7ad2a7']
    },
    {
        y: 695,
        length: 0.01,
        amplitude: 57,
        frequency: 0.003,
        lean: 2.4,
        color: 132,
        fill: "#178b6f",
        stops: ['#76cfa5', '#57b495', '#2d917d', '#7ad2a7']
    },
];
let folders = [];

for (let i = 0; i < 4; i++) {
    let folder = gui.addFolder(`Wave ${i + 1}`);
    folder.add(waves[i], 'y', 0, canvas.height);
    folder.add(waves[i], 'length', -0.3, 0.1);
    folder.add(waves[i], 'amplitude', -300, 300);
    folder.add(waves[i], 'frequency', 0.001, 1);
    folder.add(waves[i], 'lean', -30, 300);
    folder.add(waves[i], 'color', 0, 255);
    // folder.open();
    folders.push(folder);
}

let increments = [];
for (let wave of waves) {
    increments.push(wave.frequency);
}
c.translate(canvas.width / 2, canvas.height / 2);
c.rotate(45 * Math.PI / 180);
c.translate(-200, -200);
c.translate(-canvas.width / 2, -canvas.height / 2,);
c.translate(340, -340);

const stopAColor = [
        { 'r':'9', 'g':'117', 'b':'190' }, //blue
        { 'r':'59', 'g':'160', 'b':'89' }, //green
        { 'r':'230', 'g':'192', 'b':'39' }, //yellow
        { 'r':'238', 'g':'30', 'b':'77' } //red
    ],
    stopBColor = [
        { 'r':'205', 'g':'24', 'b':'75' }, //pink
        { 'r':'33', 'g':'98', 'b':'155' }, //blue
        { 'r':'64', 'g':'149', 'b':'69' }, //green
        { 'r':'228', 'g':'171', 'b':'33' } //yellow
    ];
let gradient;
function animate() {
    requestAnimationFrame(animate);
    // c.fillStyle = 'rgba(204, 108, 88, .8)';
    // c.fillRect(0, 0, canvas.width, canvas.height);
    c.clearRect(0, 0, canvas.width, canvas.height);
    for (let j = 0; j < waves.length; j++) {
        if (j === 3) continue;
        c.beginPath();
        c.moveTo(0, canvas.height / 2);

        for (let i = 0; i < canvas.width; i++) {
            c.lineTo(i,
                waves[j].y + Math.sin(i * waves[j].length + increments[j]) * waves[j].amplitude * Math.sin(increments[j]) - i / waves[j].lean
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
        // gradient.addColorStop(0, waves[j].fill);
        // gradient.addColorStop(Math.pow(Math.sin(increments[j]), 2), '#2B9D7F');
        // gradient.addColorStop(Math.abs(Math.sin(increments[j])), '#3EB2A4');
        // gradient.addColorStop(1 - Math.abs(Math.sin(increments[j])), '#068b7a');
        // gradient.addColorStop(1, waves[j + 1].fill);
        // c.fillStyle = waves[j].fill;
        gradient = new Gradient(c, canvas.width, canvas.height);
        gradient.addStop(0, stopAColor);
        gradient.addStop(1, stopBColor);
        gradient.draw();
        c.fill();

    }

    for (let i = 0; i < waves.length; i++) {
        increments[i] += waves[i].frequency;
    }

}

animate();

function lerp(a, b, u) {
    return (1 - u) * a + u * b;
}

const Anim = {
    duration: 3000,
    interval: 10,
    stepUnit: 1.0,
    currentUnit: 0.0
}

function Gradient (context, width, height) {
    this.c = context;
    this.width = width;
    this.height = height;
    this.colorStops = [];
    this.currentStop = 0;

    this.addStop = function(pos, colors) {
        const stop = {pos: pos, colors: colors, currentColor: null}
        this.colorStops.push(stop);
    }

    this.updateStops = function() {
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

    this.draw = function() {
        const gradient = c.createLinearGradient(0, 0, this.width, this.height);

        for (let i = 0; i < this.colorStops.length; i++) {
            let stop = this.colorStops[i],
                pos = stop.pos,
                color = stop.currentColor;

            gradient.addColorStop(pos, color);
        }

        this.c.clearRect(0, 0, this.width, this.height);
        this.c.fillStyle = gradient;
        this.c.fillRect(0, 0, this.width, this.height);
    }
}