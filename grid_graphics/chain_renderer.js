class ChainRenderer{

    constructor(grid_delegate){
        this._grid_delegate = grid_delegate
        this._chain = []
    }

}

function get_sprite(src, step, y, x){
    sprite = new TxtSprite(src, step, y*step, x*step)
    return sprite
}

function draw_line(y1, x1, y2, x2, color=[100, 100, 100]){
   orig = {x: x1*step, y: y1*step}
    dest = {x: x2*step, y: y2*step}
    let line = new LineSprite(step, orig, dest, color)
}








