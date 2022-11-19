function generateNumberLabel(x, y,  label_y, label_x){

    let t = new TxtSprite(" "+`${label_y} ${label_x}`, step, {x: x, y: y}, 0.5, {x:3, y:3});
    return t
}