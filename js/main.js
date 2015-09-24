requirejs(['snakeunit', 'keymapper'], 
          function ($, snakeunit) {
            window.onkeydown = keyMapper;
            canvas = document.getElementById("canvas");
            ctx = canvas.getContext("2d");
    
            head = new SnakeUnit({x: 1, y: 0});
            head.unitRenderer();
        });