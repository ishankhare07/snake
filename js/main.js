requirejs(['snakeunit'], 
          function ($, snakeunit) {
            canvas = document.getElementById("canvas");
            ctx = canvas.getContext("2d");
    
            head = new SnakeUnit();
            head.unitRenderer();
        });