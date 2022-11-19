function drawGridTile(c, i, step, j) {
  push();
  stroke(0);
  strokeWeight(0);
  // fill(tile_color[0], tile_color[1], tile_color[2], lightness);
  fill(c);
  // fill( tile_color)
  rect(i * step, j * step, step, step);
  pop();
}

function draw_gridtiles(size, step, tile_color) {
  for (let i = 0; i < size/step; i ++) {
    for (let j = 0; j < size/step; j ++) {
      let lightness = twoSevenDarker(i,j,0.3);
      let c = lerpColor(color(0, 0, 0), color(tile_color[0]+15*i, tile_color[1]+15*j, tile_color[2]), lightness);
      // let c = lerpColor(color(0, 0, 0), color(25*i, 25*j, 0), lightness);

      drawGridTile(c, i, step, j);
    }
  }
}



function twoSevenDarker(x,y,factor){
  let lightness = 1;
  [x,y].filter(function (value) {
    if ([2,7].includes(value)) {
      lightness -= factor;//
    }})
  return lightness
}

