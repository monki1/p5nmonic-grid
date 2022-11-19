let highLightRect = function(x,y,i,j){
    fill(255,255,255,100);
    brightness(255);
    noStroke()
    rect(x,y,i,j)
}
let highlightCol = function (col, step, size){
    highLightRect(col*step, 0, step, size)}
let highlightRow = function (row, step, size){
    highLightRect(0, row*step, size, step)}