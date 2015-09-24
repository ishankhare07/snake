function keyMapper(event) {
    var key = event.keyCode || event.which;
    if (!snakeHead.vel_changed) {
        if (key === 37) {                                       // left
            snakeHead.changeVelocity({x: -1, y: 0});
        } else if (key === 38) {                                // up
            snakeHead.changeVelocity({x: 0, y: -1});
        } else if (key === 39) {                                // right
            snakeHead.changeVelocity({x: 1, y: 0});
        } else if (key === 40) {                                // down
            snakeHead.changeVelocity({x: 0, y: 1});
        } else if (key === 80) {
            clearInterval(window.mainInterval);
        }
        snakeHead.vel_changed = true;
    }
}