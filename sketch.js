
var BACKGROUND_COLOR = [255, 255, 255, 0];
var TILE_COLOR = [95, 50, 255];
var LINE_COLOR = [60, 60, 60];
let canvas_size;
let step;
let sprite_proportions = 0.9;
let canvas_proportion = 1;
var G;
let cow
let canvas;
let NUM_CHIAN;
let num;



function keyTyped(key) {
    if (!"1234567890Abnmhjcxzds".includes(key)) {
        return
    }

    if (key == "A") {
        if (num.length >0) {
            num.pop()
        }else{
            NUM_CHIAN.delete()
        }
        return;
    } else if (key == "B") {
        NUM_CHIAN.clear();
        num = []
    }
    if(num.length == 2){
        num = []
    }


    num.push(key)

    if (num.length == 2) {
        NUM_CHIAN.addNumber(num[0], num[1])
    }

    console.log(key)



    document.querySelector('#number_label').innerHTML = NUM_CHIAN.numbers.join(" -") + ">>" + num.join(" ");


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
    frameRate(5 );
    num = []
    NUM_CHIAN = new NumberChain();
    // pi = "3141592653589793238462643"
    // for (let i = 1; i < pi.length; i+=2) {
    //     NUM_CHIAN.addNumber(pi[i-1], pi[i])
    // }
    canvas.background(BACKGROUND_COLOR);
    G = new GridDelegate(canvas_size, 10);

    randomColor = ()=>{
        return  Math.floor(Math.random() * 200 + 25)
    }
    TILE_COLOR = [randomColor(), randomColor(), randomColor()];


}
function draw() {
    // canvas.clear();
    G.drawGrid(LINE_COLOR, TILE_COLOR);
    G.highlight(num[0],num[1])
    get_lines(G.step, NUM_CHIAN.numbers).forEach(function (line) {
        line.draw();
    });
    get_sprites(G.step, NUM_CHIAN.numbers).forEach(function (sprite) {
        sprite.draw();
    })


}
