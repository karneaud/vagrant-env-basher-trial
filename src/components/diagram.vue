<template>
<div id="mia" class="container">
  <div id="frame" v-bind:style="{backgroundColor: colour}" class="mia">
    <img src="~assets/thebody.png"/>
    <div id="inner">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
    <div id="outer">
      <div class="top" :style="{backgroundImage: url('static/tops/outer/',outerTop) }"></div>
      <div class="bottom" :style="{backgroundImage: url('static/bottoms/outer/',outerBottom) }"></div>
    </div>
    <div id="shoes" :style="{backgroundImage: url('static/shoes/', shoes) }"></div>
    <div id="hair" :style="{backgroundImage: url('static/wigs/', hair) }"></div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    colour: {
      default: '#CC6666'
    },
    hair: {
      default: 'none'
    },
    outerTop: {
      default: 'none'
    },
    outerBottom: {
      default: 'none'
    },
    shoes: {
      default: 'none'
    }
  },
  methods: {
    url: function (path, file) {
      let url = 'static/none.png'
      if (file !== 'none') {
        url = path + file + '.png'
      }

      return 'url(' + url + ')'
    }
  }
}
</script>
