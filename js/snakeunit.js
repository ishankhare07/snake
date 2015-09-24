function SnakeUnit(posx, posy, next) {
    // constructor for snakeunit
    if (posx === undefined && posy === undefined) {
        this.posx = canvas.width / 2;
        this.posy = canvas.height / 2;
    } else {
        this.posx = posx;
        this.posy = posy;
    }
    
    if (next === undefined) {
        this.next = next;
    } else {
        this.next = null;
    }
    
    this.fillStyle = "black";
}

SnakeUnit.prototype.unitRenderer = function() {
    ctx.fillStyle = this.fillStyle;
    ctx.fillRect(this.posx, this.posy, 2, 2);
}