//draw, get dest, set dest
//shape
//draw-> map (tstep, org, dest, 0, cycle-timestep)


class Sprite{
    constructor(src, step, orig, sprite_proportions=0.9, offset={x:0, y:0}) {
        this.dest = orig;
        this.src = src;
        this.step = step;
        this.sprite_proportions = sprite_proportions;
        this.orig = orig;
        this.offset = offset;
    }


    draw(r=1) {

    }

    setDest(dest){
        this.orig = this.dest;
        this.dest = dest;
    }

    _getMappedPos(ratio=1){
        let mX = map(ratio, 0, 1, this.orig.x, this.dest.x);
        let mY = map(ratio, 0, 1, this.orig.y, this.dest.y);
        return {x:mX, y:mY}
    }

    getOffSet(){
        return this.offset
              }
}
class TxtSprite extends Sprite{
    constructor(src, step, orig, sprite_proportions=0.8, offset={x:0, y:0}) {
        super(src, step, orig, sprite_proportions, offset);
    }


    draw(ratio=1, alpha=255, color=[255,255,255]) {
        let mappedPos = super._getMappedPos(ratio);
        let mX = mappedPos.x + this.getOffSet().x;
        let mY = mappedPos.y + this.getOffSet().y;
        push()
        fill(color[0], color[1], color[2],alpha);
        textSize((step*this.sprite_proportions));
        text(this.src, mX, mY, mX+step, mY+step);
        pop()
    }


}

class ImageSprite extends Sprite{
    constructor(src, step, orig, sprite_proportions=1,offset={x:0, y:0}) {
        super(src, step, orig, sprite_proportions, offset);
        // this.img = loadImage(src);
    }

    draw(ratio=1, alpha=255) {
        let mappedPos = super._getMappedPos(ratio);
        let mX = mappedPos.x + this.getOffSet().x;
        let mY = mappedPos.y + this.getOffSet().y;
        push()
        tint(255, Math.ceil(alpha*255)); // Display at half opacity
        image(this.src, mX+this.offset.x, mY+ this.offset.y, step*sprite_proportions, step*sprite_proportions);
        pop()
    }

}

class LineSprite extends Sprite{
    constructor(step, orig, dest, color=[0,255,0], stroke_weight=3) {
        super(null, step,orig)
        this.dest = dest
        this._stroke_weight = stroke_weight
        this._color = color
    }
    draw(r = 1) {
        push()
        stroke(this._color[0], this._color[1],this._color[2])
        strokeWeight(this._stroke_weight)
        line(this.orig.x, this.orig.y, this.dest.x, this.dest.y)
        pop()


    }

}