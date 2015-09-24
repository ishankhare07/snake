function mover(unit) {
    if (unit === null) {
        return;   
    } else {
        move(unit.getVelocity(), unit);
        mover(unit.next);
    }
}

function move(velocity, unit) {
    var position = unit.getPosition();
    if (velocity.x === 1) {
        unit.changePosition(position.x + 1, position.y);
    } else if (velocity.x === -1) {
        unit.changePosition(position.x - 1, position.y);
    } else if (velocity.y === 1) {
        unit.changePosition(position.x, position.y + 1);
    } else if (velocity.y === -1) {
        unit.changePosition(position.x, position.y - 1);
    }
}