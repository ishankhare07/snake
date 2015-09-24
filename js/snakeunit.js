function SnakeUnit(posx, posy, next) {
    // constructor for snakeunit
    if (posx === undefined && posy === undefined) {
        this.posx = this.posy = canvas.width / 2;
    } else {
        this.posx = posx;
        this.posy = posy;
    }
    
    if (next === undefined) {
        this.next = next;
    } else {
        this.next = null;
    }
}