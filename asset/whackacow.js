// class Wackacow {
//
//
//     constructor(cow_img, grid_size=[10,10], random_pos_speed = 3000, move_speed = [0.001,1]) {
//         this.grid_size = grid_size;
//         this.random_pos_speed = random_pos_speed;
//         this.move_speed = move_speed;
//         this.cow_org = [0,0]
//         this.cow_dest = [0,0]
//         this.img = cow_img;
//         this.ratio = 0;
//     }
//     setDest(dest){
//         this.ratio = 0
//         this.cow_org = this.cow_dest;
//         this.cow_dest = dest;
//     }
//
//
//     _random_pos(){
//         this.setDest([Math.random()*(this.grid_size[0]-1), Math.random()*(this.grid_size[1]-1)])
//     }
//    getCoordinate(){
//         return (this.ratio, this.cow_org[0], this.cow_org[1], this.cow_dest[0], this.cow_dest[1])
//
//     }
//
//     _setNewPosInterval(){
//         return setInterval(this._random_pos, this.random_pos_speed)
//     }
//     _setMoveInterval(){
//         return setInterval(function (){this.ratio += this.move_speed[0]}, this.move_speed[1])
//     }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// }


class Whackacow{
    constructor(img_sprite, grid_delegate) {
        this.img_sprite = img_sprite;
        this.ratio = 0;
        this.grid_delegate = grid_delegate;


    }
    newDest(){
        this.ratio = 0;
        this.img_sprite.setDest({x:Math.random()*canvas_size, y:Math.random()*canvas_size})

    }
    draw(){
        this.img_sprite.draw(this.ratio)
    }
    move(r=0.01){
        this.ratio += r;
        console.log(this.ratio)
    }
    getIntegerCoordinate(){
        let step = this.grid_delegate.step;
        let center_pos = this.img_sprite.getCenterPos(this.ratio);
        center_pos = {x: center_pos.x-0.5*step, y: center_pos.y- 0.5*step}
        let coor = this.grid_delegate.posToCoordinates(center_pos);
        coor = {x:Math.floor(coor.x), y:Math.floor(coor.y)}
        return coor;

    }

}