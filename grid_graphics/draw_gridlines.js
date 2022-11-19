
function draw_gridlines(size, step, line_color) {
    // let linecolors = [color(0, 0, 0), color(255, 255, 255)];
  for (var i = 0; i <= size/step; i++) {
    let i_pos = i*step;
    push()

    stroke(line_color[0], line_color[1], line_color[2]);
    stroke(line_color);
    strokeWeight(strokeWeightModifier(i));
    line(i_pos, 0, i_pos, size);
    line(0, i_pos, size, i_pos);
    pop();
  }
}

function strokeWeightModifier(i) {
    let result;
    if (i == 5) {
        result = 7;
    } else if ([2, 3, 7, 8].includes(i)) {
        result = 4;
    }else if([1,9].includes(i)){
        result = 10;
    } else {
        result = 1;
    }
    return result;

}



// module.exports = drawGrid()

