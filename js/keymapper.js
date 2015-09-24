function keyMapper(event) {
    var key = event.keyCode || event.which;
    var position = head.getPosition();
    if (key === 37) {                                       // left
        head.changePosition(position.x - 2, position.y);
    } else if (key === 38) {                                // up
        head.changePosition(position.x, position.y - 2);
    } else if (key === 39) {                                // right
        head.changePosition(position.x + 2, position.y);
    } else if (key === 40) {
        head.changePosition(position.x, position.y + 2);
    }
}