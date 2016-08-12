<template>
<div id="mia" class="container">
  <div id="frame" v-bind:style="{backgroundColor: colour}" class="mia">
    <img src="../assets/images/thebody.png"/>
    <div id="inner">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
    <div id="outer">
      <div class="top" :style="{backgroundImage: url('src/assets/images/tops/outer/',outerTop) }"></div>
      <div class="bottom" :style="{backgroundImage: url('src/assets/images/bottoms/outer/',outerBottom) }"></div>
    </div>
    <div id="shoes" :style="{backgroundImage: url('src/assets/images/shoes/', shoes) }"></div>
    <div id="hair" :style="{backgroundImage: url('src/assets/images/wigs/', hair) }"></div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    colour: {
      default : "#CC6666"
    },
    hair : {
      default : "none"
    },
    outerTop : {
      default : "none"
    },
    outerBottom : {
      default : "none"
    },
    shoes : {
      default : "none"
    }
  },
  methods : {
    url : function(path, file) {
          let url = 'src/assets/images/none.png';
          if(file != 'none')
            url = path + file + '.png';

          return 'url(' + url + ')';
      }
    }
}
</script>
