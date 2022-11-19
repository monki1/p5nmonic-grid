
var BACKGROUND_COLOR = [255, 255, 255, 0];
var TILE_COLOR = [95, 50, 255];
var LINE_COLOR = [60, 60, 60];
let canvas_size;
let step;
let sprite_proportions = 0.9;
let canvas_proportion = 1;
var G;
var input_delegate;
let cow
let canvas;
let NUM_CHIAN = new NumberChain();



function keyTyped() {
    if ("1234567890bnmhjcxzds".includes(key)){
    // console.alert(key)
    //     input_delegate.keyTyped(key)
    }
    // console.log(key)

}

function preload() {
    cow = loadImage('snake.png');
    if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        document.querySelector('#keypad').style.display = "none";
    }

}


function setup() {
    console.log(displayWidth, displayHeight);

    canvas_size = Math.min(windowWidth, windowHeight) * canvas_proportion;
    step = canvas_size / 10;
    canvas = createCanvas(canvas_size, windowHeight);
    canvas.parent('canvas');


    canvas.background(BACKGROUND_COLOR);
    G = new GridDelegate(canvas_size, 10);



}
function draw() {
    // canvas.clear();
    G.drawGrid(LINE_COLOR, TILE_COLOR);
    get_line(3,4,7,8).draw();


}
