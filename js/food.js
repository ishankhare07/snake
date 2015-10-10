function Food() {
    this._x = parseInt((Math.random() * 1000) % canvas.width);
    this._y = parseInt((Math.random() * 1000) % canvas.height);
    
    ctx.fillStyle = "red";
    ctx.fillRect(this._x, this._y, 2, 2);
}

Food.prototype.matchEat = function(position) {
    if (this.roundDistance(position.x, this._x) && this.roundDistance(position.y, this._y)) {
        ctx.fillStyle = "white";
        ctx.clearRect(this._x, this._y, 2, 2);
        var scoreElement = document.getElementById("score")
        var score = parseInt(scoreElement.innerHTML);
        scoreElement.innerHTML = String(score + 1);

        return true;
    } else {
        return false;   
    }
}

Food.prototype.roundDistance = function(a, b) {
    if (Math.abs(a - b) <= 1) {
        return true;   
    } else {
        return false;   
    }
}
