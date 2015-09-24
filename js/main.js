requirejs(['snakeunit', 'keymapper', 'mover', 'food'], 
function ($) {
    sec                 = 1000;
    level               = 10;
    window.onkeydown    = keyMapper;
    canvas              = document.getElementById("canvas");
    ctx                 = canvas.getContext("2d");
    
    head = new SnakeUnit({x: 1, y: 0});
    head.unitRenderer();
    
    food = new Food();
    
    mainInterval = setInterval(function () {
        if (food.matchEat(head.getPosition())) {
            food = new Food();
            head.addUnit();
        }
        mover(head);
    }, sec/level);
});