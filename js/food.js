function Food() {
    this._x = parseInt((Math.random() * 1000) % canvas.width);
    this._y = parseInt((Math.random() * 1000) % canvas.height);
    
    ctx.fillStyle = "red";
    ctx.fillRect(this._x, this._y, 2, 2);
}

Food.prototype.matchEat = function(position) {
    if (this.roundDistance(position.x, this._x) && this.roundDistance(position.y, this._y)) {
        return true; 
    } else {
        return false;   
    }
}

Food.prototype.roundDistance = function(a, b) {
    if (Math.abs(a - b) <= 2) {
        return true;   
    } else {
        return false;   
    }
}