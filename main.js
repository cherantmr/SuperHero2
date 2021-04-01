var canvas = new fabric.Canvas('myCanvas');

block_image_Width = 30;
block_image_height = 30;

player_x = 10;
player_Y = 10;

var player_object="";

function player_update()
{
    fabric.Image.fromURL("player.png" , function(img){
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToWidth(140);
    player_object.set({
        top:player_y,
        left:player_x
    })
    canvas.add(player_object);

    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image , function(img){
    block_image_object = Img;

    block_image_object.scaleToWidth(block_image_Width);
    block_image_object.scaleToWidth(block_image_height);
    block_image_object.set({
        top:player_y,
        left:player_x
    })
    canvas.add(block_image_object);
    
    });

  if(KeyPressed == '70')
 {
    new_image("ironman_face.png");
    console.log("f");
 }

 if(KeyPressed == '66')
{
    new_image("spiderman_body.png");
    console.log("b");
}

if(KeyPressed == '76')
{
    new_image("hulk_leg.png");
    console.log("l")
}

if(KeyPressed == '82')
{
    new_image("thor_right_hand");
    console.log("r")
}

if(KeyPressed == '72')
{
    new_image("captain_america_left_hand.png");
    console.log("h")
}

if(KeyPressed == '76')
{
   up();
    console.log("up");
}

if(KeyPressed == '40')
{
  down();
    console.log("down");
}

if(KeyPressed == '37')
{
  left();
    console.log("left");
}

if(KeyPressed == '39')
{
 right();
    console.log("right");
}

if(KeyPressed == '18')
{
  Alt();
    console.log("Alt");
}

if(KeyPressed == '91')
{
 Ctrl();
    console.log("Ctrl");
}

if(KeyPressed == '27')
{
  Esc();
    console.log("Esc");
}

}