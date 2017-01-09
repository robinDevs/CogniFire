/**
 * Created by lepallex on 27/01/15.
 */
// color levels, indexes, hue  definition
function rgb (r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}
Colors = {

    rgb: rgb,

    colorLevels: [
        // red
        [
            rgb(58, 0, 3), rgb(107, 0, 5), rgb(255, 0, 0), rgb(251, 51, 61), rgb(253, 104, 109)
        ],
        // yellow
        [
            rgb(59, 60, 5), rgb(108, 110, 6), rgb(255, 255, 11), rgb(255, 255, 61), rgb(255, 255, 109)
        ],
        // green
        [
            rgb(9, 61, 3), rgb(15, 111, 3), rgb(35, 255, 8), rgb(71, 255, 61), rgb(115, 255, 109)
        ],
        // cyan
        [
            rgb(10, 61, 10), rgb(15, 110, 108), rgb(33, 255, 255), rgb(70, 255, 255), rgb(114, 255, 255)
        ],
        // blue
        [
            rgb(2, 0, 60), rgb(1, 0, 109), rgb(0, 0, 255), rgb(60, 44, 255), rgb(108, 100, 255)
        ],
        // purple
        [
            rgb(58, 0, 60), rgb(107, 0, 108), rgb(251, 0, 255), rgb(252, 31, 255), rgb(252, 96, 255)
        ]
    ],

// color indexes

    red: 0,
    yellow: 1,
    green: 2,
    cyan: 3,
    blue: 4,
    purple: 5
}

// hue indexes

veryDark = 0;
dark = 1;
saturated = 2;
light = 3;
veryLight = 4;

// Series of random numbers between 0 and 6
/*
function getARandomArray(size) {
    randomNumbers = [];
    for (var i = 0; i < size; i++) randomNumbers[i] = i;
    for (var i = 0; i < size - 1; i++) {
        var pos = Math.floor(Math.random() * size);
        var value = randomNumbers[pos];
        randomNumbers.splice(pos, 1);
        randomNumbers.push(value);
    }
    return randomNumbers;
}*/