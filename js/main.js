requirejs(['snakeunit', 'keymapper', 'mover', 'food'], 
function ($) {
    window.onkeydown = keyMapper;
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    
    head = new SnakeUnit({x: 1, y: 0});
    head.unitRenderer();
    
    food = new Food();
    
    setInterval(function () {
        if (food.matchEat(head.getPosition())) {
            food = new Food();
        }
        mover(head);
    }, 100);
});