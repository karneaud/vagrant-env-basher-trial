<template>
<div id="board"></div>
</template>
<script>
import p5js from 'p5'

let frame, defaultColour = "#605C58", sketch = function(p) {
  p.preload = () => {
    frame = p.loadImage("src/assets/images/thebody.png", function(img){

    });
  }

  p.setup = () => {
    let canvas = p.createCanvas(150,434.89)
    canvas.parent('board')
  }

  p.draw = () => {
    p.background(defaultColour);
    p.image(frame,0,0, p.width, p.width/frame.width * frame.height);
  }
}, s

export default {
  data () {
    return {
      defaultColour : "#605C8"
    }
  }, ready () {
    s = new p5js(sketch, "board");
    defaultColour = this.$parent.colours[0];
    this.$on("set-colour", function(e){
      console.log('ok', e)
    })
  }
}
</script>
