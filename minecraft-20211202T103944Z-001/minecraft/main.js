const { fabric } = require("./fabric");

var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_obj = "";
var block_image_obj = ""
function player_updt(){
        fabric.Image.fromURL('player.png', function(Img){
              player_obj = Img;
              player_obj.scaleToWidth(150);
              player_obj.scaleToHeight(150);
              player_obj.set({
                      top:player_y,

                      left:player_x
              })
              canvas.add(player_obj);

        })
}
function new_image(get_img){
        fabric.Image.fromURL(get_img, function(Img){
                block_image_obj = Img;
                block_image_obj.scaleToWidth(block_image_width);
                block_image_obj.scaleToHeight(block_image_height);
                block_image_obj.set({
                        top:player_y,

                        left:player_x
              })
              canvas.add(block_image_obj);
        })
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
        keyPressed = e.keycode;
        if (e.shiftKey == true && keyPressed == '80'){
                block_image_width = block_image_width + 10;
                block_image_height = block_image_height + 10;
                document.getElementById("current_width").innerHTML = block_image_width;
                document.getElementById("current_height").innerHTML = block_image_height;
        }
        if (e.shiftKey  && keyPressed == '77'){
                block_image_width = block_image_width - 10;
                block_image_height = block_image_height - 10;
                document.getElementById("current_width").innerHTML = block_image_width;
                document.getElementById("current_height").innerHTML = block_image_height;
        }
        if (keyPressed == '38'){
                up()
        }
        if (keyPressed == '40'){
                down()
        }
        if (keyPressed == '37'){
                left()
        }
        if (keyPressed == '39'){
                right()
        }
        //its W key in the keyboard
        if (keyPressed == '87'){
                new_image("wall.png")
        }
        //its G key in the keyboard
        if (keyPressed == '71'){
                new_image("ground.png")
        }
        //its L key in the keyboard
        if (keyPressed == '76'){
                new_image("light_green.png")
        }
        //its T key in the keyboard
        if (keyPressed == '84'){
                new_image("trunk.jpg")
        }
        //its R key in the keyboard
        if (keyPressed == '82'){
                new_image("roof.jpg")
        }
        //its Y key in the keyboard
        if (keyPressed == '89'){
                new_image("yellow_wall.png")
        }
        //its D key in the keyboard
        if (keyPressed == '68'){
                new_image("dark_green.png")
        }
        //its U key in the keyboard
        if (keyPressed == '85'){
                new_image("unique.png")
        }
        //its C key in the keyboard
        if (keyPressed == '67'){
                new_image("cloud.jpg")
        }
}