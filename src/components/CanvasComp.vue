<script setup>
import P5 from 'p5'


const script = p5 => {
      // These are your typical setup() and draw() methods
      let capture;

      p5.setup = () => {
        p5.createCanvas(window.innerWidth, window.innerHeight);
        capture = p5.createCapture(p5.VIDEO, {flipped: true });
        capture.hide();
        
      };
      p5.draw = () => {
        p5.background(255, 0);

        // //Calculate aspect ratio
        let videoWidth = capture.width;
        let videoHeight = capture.height;
        let aspectRatio = videoWidth / videoHeight;

        // //Determine the dimensions to scale the video to fill the canvas:
        let scaleFactor = p5.max(p5.width / videoWidth, p5.height / videoHeight);
        let targetWidth = videoWidth * scaleFactor;
        let targetHeight = videoHeight * scaleFactor;

        //Calculate the position to center the video on the canvas:
        let xPos = (p5.width - targetWidth) / 2;
        let yPos = (p5.height - targetHeight) / 2;

        //Draw the video capture within the canvas:
        p5.push();
        p5.tint(8,116,201); //farve på tint
        p5.image(capture, xPos, yPos, targetWidth, targetHeight);
        p5.pop();



        

        //p5.ellipse(p5.mouseX, p5.mouseY, 40, 40);
      }; 
    }
    // Attach the canvas to the div
    const p5canvas = new P5(script, 'canvas');
  
</script>

<template>


</template>