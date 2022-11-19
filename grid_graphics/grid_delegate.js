class GridDelegate {
  constructor(screen_size, grid_size=10, offset = {x: 0, y: 0}) {
    this.grid_size = grid_size;
    this.screen_size = screen_size;
    this.offset = offset;
    this.step = screen_size/this.grid_size;
    //--------------------------------------------------------------------------------
    this.number_labels = []
    this.generateNumberLabels()
  }

  posToCoordinates(pos){
        return{x:(pos.x/this.step), y:(pos.y/this.step)}
    }
  coordinatesToPos(coordinates){
        return{x:(coordinates.x*this.step), y:(coordinates.y*this.step)}
    }


  drawGrid(line_color, tile_color){
        draw_grid(this.screen_size, this.step, line_color, tile_color);
    }


  highlight(x, y){
      if(y!=undefined){highlightCol(y,this.step, this.screen_size)}
      if(x!=undefined){highlightRow(x,this.step, this.screen_size)}
  }

  generateNumberLabels(){
    for (let i = 0; i < this.grid_size; i ++) {
      for (let j = 0; j < this.grid_size; j ++) {
        let label = generateNumberLabel(i*this.step, j*this.step, j, i);
        this.number_labels.push(label);
      }
    }
  }


  drawNumberLabels(alpha=255){
    // this.number_labels.forEach(function(value){
    //   value.draw(alpha);
    // });

    for (let i = 0; i < this.number_labels.length; i ++) {
      this.number_labels[i].draw(1,alpha);
    }
  }





}

