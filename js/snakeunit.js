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
    
    this._velocity      = velocity;                          // required argument
    this.flag           = false;
    this.vel_changed    = false;
}

SnakeUnit.prototype.unitRenderer = function() {
    ctx.fillStyle = "black";
    ctx.fillRect(this._posx, this._posy, 2, 2);
}

SnakeUnit.prototype.changePosition = function(new_x, new_y) {
    if (new_x < 0) {
        new_x = canvas.width - new_x - 1;
    } else if (new_y < 0) {
        new_y = canvas.height - new_y - 2;
    } else if (new_x > canvas.width - 1) {
        new_x = new_x % canvas.width;   
    } else if (new_y > canvas.height - 1) {
        new_y = new_y % canvas.height;   
    }
    
    ctx.clearRect(this._posx, this._posy, 2, 2);
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

SnakeUnit.prototype.changeVelocity = function(velocity) {
    if (this._velocity.x != 0 && (this._velocity.x * -1) == velocity.x) {
        // pass, as the velocity is just opposite of current velocity
    } else if (this._velocity.y != 0 && (this._velocity.y * -1) == velocity.y){
        // pass, valocity is just opposite
    } else {
        this._velocity.x = velocity.x;
        this._velocity.y = velocity.y;
    }
}

SnakeUnit.prototype.addUnit = function() {
    var temp        = this;
    var prev_pos    = this.getPosition();
    var prev_vel    = this.getVelocity();
    while(temp._next != null) {
        temp        = temp._next;
        prev_pos    = this.getPosition();
        prev_vel    = this.getVelocity();
    }
    
    temp.addNext({x: prev_vel.x, y: prev_vel.y}, prev_pos.x, prev_pos.y);
    temp.unitRenderer();
}

SnakeUnit.prototype.addNext = function(vel, x, y) {
    if (vel.x > 0) {
        this._next = new SnakeUnit(vel, x - 2, y);
    } else if (vel.x < 0) {
        this._next = new SnakeUnit(vel, x + 2, y);
    } else if (vel.y > 0) {
        this._next = new SnakeUnit(vel, x, y - 2);
    } else if (vel.y < 0) {
        this._next = new SnakeUnit(vel, x, y + 2);
    }
    
    this._next.unitRenderer();
}
