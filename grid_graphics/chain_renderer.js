
function get_sprite(src, step, y, x){
    sprite = new TxtSprite(src, step, {y:y*step, x:x*step})
    return sprite
}

function get_sprites(step, lst){
    let _sprites = []
    if (lst.length==0){
        return _sprites
    }
    for (let i = 0; i < lst.length; i++){
        let sprite = get_sprite(c_zodiacs[i%12], step, lst[i][0], lst[i][1])
        _sprites.push(sprite)
    }
    return _sprites
}

function get_line(step, y1, x1, y2, x2, color=[100, 255, 100]){
    orig = {x: (x1+0.5)*step, y: (y1+0.5)*step}
    dest = {x: (x2+0.5)*step, y: (y2+0.5)*step}
    let line = new LineSprite(step, orig, dest, color)
    return line
}

function  get_lines(step, lst){
    let lines = []
    let last = lst[0]
    for (let i = 1; i < lst.length; i++){
        let line = get_line(step, last[0], last[1], lst[i][0], lst[i][1], )
        last = lst[i]
        lines.push(line)
    }
    return lines
}





let c_zodiacs = [
    "🐀", "🐂", "🐅" , "🐇" , "🐉" , "🐍" , "🐎" , "🐑", "🐒" , "🐓" , "🐕" ,
"🐖"
]

