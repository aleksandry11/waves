export const waves = [
    {
        y: 282,
        length: 0.0018,
        amplitude: 2,
        frequency: 0.003,
        lean: 183,
        curveIndex: 6.2,
        curveIndex2: 12,
        incline: 3,
        stops: {
            color0: [ 36, 127, 106],
            color1: [ 17, 122, 103],
            color2: [ 26, 167, 126],
            color3: [ 27, 122, 103],
        },
        gradientPath: [0.5, 0, 0.5, 1],
        definingFunctions: [Math.cos, Math.cos]
    },
    {
        y: 560,
        length: 0.014,
        amplitude: 9.1,
        frequency: 0.0077,
        lean: 204,
        curveIndex: 5.7,
        curveIndex2: 2.25,
        incline: 5,
        stops: {
            color0: [ 36, 132, 109],
            color1: [ 17, 117, 98],
            color2: [ 35, 164, 131],
            color3: [ 36, 189, 119]
        },
        gradientPath: [0, 0.2, 1, 3],
        definingFunctions: [Math.cos, Math.sin],
        useAdditionForDefiningFunctions: true
    },
    {
        y: 582,
        length: 0.0041,
        amplitude: 5,
        frequency: 0.0081,
        lean: 64,
        curveIndex: 9,
        curveIndex2: 20,
        incline: 25,
        stops: {
            color0: [ 60, 177, 143],
            color1: [ 60, 157, 133],
            color2: [ 36, 200, 160],
            color3: [ 35, 210, 168],
        },
        gradientPath: [1, 0.1, 0.2, 1],
        definingFunctions: [Math.sin, Math.cos],
        complexPathStart: true
    },
    {
        y: 498,
        length: 0.006,
        amplitude: 2,
        frequency: 0.0082,
        lean: 58.8,
        curveIndex: 13,
        curveIndex2: 26.9,
        incline: -20,
        stops: {
            color0: [ 36, 209, 166],
            color1: [ 27, 158, 125],
            color2: [ 102, 217, 188],
            color3: [ 14, 82, 65]
        },
        definingFunctions: [Math.sin, Math.sin],
        complexPathEnd: true,
    },
];

export const canvasConfig = {
    x: 249,
    y: -401,
    deg: 21
};