function SnakeUnit(velocity, posx, posy, next) {
    // constructor for snakeunit
    if (posx === undefined && posy === undefined) {     // default, optional argument
        this._posx = canvas.width / 2;
        this._posy = canvas.height / 2;
    } else {
        this._posx = posx;
        this._posy = posy;
    }
    
    if (next === undefined) {                           // optional, default argument
        this._next = null;
    } else {
        this._next = next;
    }
    
    this._velocity = velocity;                          // required argument
}

SnakeUnit.prototype.unitRenderer = function() {
    ctx.fillRect(this._posx, this._posy, 1, 1);
}

SnakeUnit.prototype.changePosition = function(new_x, new_y) {
    if (new_x < 0) {
        new_x = canvas.width - new_x;   
    } else if (new_y < 0) {
        new_y = canvas.height - new_y;   
    } else if (new_x > canvas.width) {
        new_x = new_x % canvas.width;   
    } else if (new_y > canvas.height) {
        new_y = new_y % canvas.height;   
    }
    
    ctx.clearRect(this._posx, this._posy, 1, 1);
    this._posx = new_x;
    this._posy = new_y;
    this.unitRenderer();
}

SnakeUnit.prototype.getNext = function() {
    return this._next;   
}

SnakeUnit.prototype.getPosition = function() {
    return {x : this._posx, y : this._posy};
}

SnakeUnit.prototype.getVelocity = function() {
    return this._velocity;
}