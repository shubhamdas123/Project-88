canvas = new fabric.Canvas("myCanvas");
// Create canvas variable
ballX = 0;
ballY = 0;
holeX = 800;
holeY = 400;
//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img() {
    // write code to Upload golf image on the canvas
    fabric.Image.fromURL("golf-h.png", function(Img) {
        holeObj = Img;
        holeObj.scaleToWidth(50);
        holeObj.scaleToHeight(50);
        holeObj.set({
            top: holeY,
            left: holeX
        });
        canvas.add(holeObj);
    });
    new_image();
}

function new_image() {
    // write code to Upload ball image on canvas
    fabric.Image.fromURL("ball.png", function(Img) {
        ballObj = Img;
        ballObj.scaleToWidth(50);
        ballObj.scaleToHeight(50);
        ballObj.set({
            top: ballY,
            left: ballX
        });
        canvas.add(ballObj);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    /* Check the coordinates of the ball and hole images to finish the game. 
    And id coordinates matches them remove ball image, 
    display "GAME OVER!!!" 
    and make canvas border 'red'. */
    if (ballX == holeX && ballY == holeY) {
        canvas.remove(ballObj);
        document.getElementById("hd3").innerHTML = "You have hit the goal";
        canvas.style.borderColor = "red";
    } else {
        if (keyPressed == '38') {
            up();
            console.log("up");
        }
        if (keyPressed == '40') {
            down();
            console.log("down");
        }
        if (keyPressed == '37') {
            left();
            console.log("left");
        }
        if (keyPressed == '39') {
            right();
            console.log("right");
        }
    }

    function up() {
        // Write a code to move ball upward.
        if (ballY > 0) {
            ballY = ballY - 10;
            canvas.remove(ballObj);
            new_image();
        }
    }

    function down() {
        // Write a code to move ball downward.
        if (ballY < canvas.width) {
            ballY = ballY + 10;
            canvas.remove(ballObj);
            new_image();
        }
    }

    function left() {
        if (ballX > 5) {
            // Write a code to move ball left side.
            ballX = ballX - 10;
            canvas.remove(ballObj);
            new_image();
        }
    }

    function right() {
        if (ballX <= 1050) {
            // Write a code to move ball right side.
            ballX = ballX + 10;
            canvas.remove(ballObj);
            new_image();
        }
    }

}