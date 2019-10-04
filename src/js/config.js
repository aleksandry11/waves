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
        stops: [
            { r: 36, g: 127, b: 106 },
            { r: 17, g: 122, b: 103 },
            { r: 26, g: 167, b: 126 },
            { r: 27, g: 122, b: 103 },
        ],
        gradientPath: [0.5, 0, 0.5, 0],
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
        stops: [
            { r: 36, g: 132, b: 109 },
            { r: 17, g: 117, b: 98 },
            { r: 35, g: 164, b: 131 },
            { r: 36, g: 189, b: 119 }
        ],
        gradientPath: [0, 0.2, 1, 3],
        definingFunctions: [Math.cos, Math.sin],
        useAdditionForDefiningFunctions: true
    },
    {
        y: 582,
        length: 0.0041,
        amplitude: 5,
        frequency: 0.0041,
        lean: 64,
        curveIndex: 9,
        curveIndex2: 20,
        incline: 25,
        stops: [
            { r: 60, g: 177, b: 143 },
            { r: 60, g: 157, b: 133 },
            { r: 36, g: 200, b: 160 },
            { r: 35, g: 210, b: 168 },
        ],
        gradientPath: [1, 0.1, 0.2, 1],
        definingFunctions: [Math.sin, Math.cos]
    },
    {
        y: 498,
        length: 0.006,
        amplitude: 2,
        frequency: 0.0172,
        lean: 58.8,
        curveIndex: 13,
        curveIndex2: 26.9,
        incline: -20,
        stops: [
            { r: 36, g: 209, b:166 },
            { r: 27, g: 158, b: 125 },
            { r: 102, g: 217, b: 188 },
            { r: 14, g: 82, b: 65 }
        ],
        definingFunctions: [Math.sin, Math.sin],
        continuationPath: true
    },
];

export const canvasConfig = {
    x: 249,
    y: -401,
    deg: 21
};