function keyMapper(event) {
    var key = event.keyCode || event.which;
    if (key === 37) {                                       // left
        head.changeVelocity({x: -1, y: 0});
    } else if (key === 38) {                                // up
        head.changeVelocity({x: 0, y: -1});
    } else if (key === 39) {                                // right
        head.changeVelocity({x: 1, y: 0});
    } else if (key === 40) {                                // down
        head.changeVelocity({x: 0, y: 1});
    } else if (key === 80) {
        clearInterval(window.mainInterval);
    }
}