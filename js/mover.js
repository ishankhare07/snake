function mover(unit) {
    if (unit === null) {
        return;   
    } else {
        move(unit.getVelocity(), unit);
        mover(unit.getNext());
    }
}

function move(velocity, unit) {
    var position = unit.getPosition();
    if (velocity.x === 1) {
        unit.changePosition(position.x + 2, position.y);
    } else if (velocity.x === -1) {
        unit.changePosition(position.x - 2, position.y);
    } else if (velocity.y === 1) {
        unit.changePosition(position.x, position.y + 2);
    } else if (velocity.y === -1) {
        unit.changePosition(position.x, position.y - 2);
    }
}