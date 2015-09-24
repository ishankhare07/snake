function mover(snakeHead) {
    var prev_position = snakeHead.getPosition();
    move(snakeHead.getVelocity(), snakeHead);
    followHead(snakeHead.getNext(), prev_position);
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
    
    if(unit.vel_changed) {
        unit.vel_changed = false;   
    }
}

function followHead(unit, position) {
    if(unit == null) {
        return;   
    } else {
        var prev_position = unit.getPosition();
        unit.changePosition(position.x, position.y);
        return followHead(unit.getNext(), prev_position);
    }
}