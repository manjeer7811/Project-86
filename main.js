var canvas = new fabric.Canvas("myCanvas");
 var x= document.getElementById("myAudio");
 




function playsound(){
	x.play()
    
        
}
function new_image(){
    fabric.Image.fromURL(wp2814818.jpg,function(Img){
       block_image_object=Img;
       
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0

        });
        canvas.add(block_image_object);
    });
   
    
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
       block_image_object=Img;
       
        block_image_object.scaleToWidth(block_image_object);
        block_image_object.scaleToHeight(block_image_object);
        block_image_object.set({
            top:0,
            left:0

        });
        canvas.add(block_image_object);
    });
   
    
}

