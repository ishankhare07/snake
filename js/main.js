requirejs(['snakeunit', 'keymapper', 'mover', 'food'], 
function ($) {
    sec                 = 1000;
    level               = 10;
    window.onkeydown    = keyMapper;
    canvas              = document.getElementById("canvas");
    ctx                 = canvas.getContext("2d");
    
    snakeHead = new SnakeUnit({x: 1, y: 0});
    snakeHead.unitRenderer();
    
    food = new Food();
    
    mainInterval = setInterval(function () {
        mover(snakeHead);
        if (food.matchEat(snakeHead.getPosition())) {
            food = new Food();
            snakeHead.addUnit();
        }
    }, sec/level);
});