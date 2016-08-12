<template id="slider" src="./pieces.vue"></template>
<script>
import mix from '../libs/vue.mixin.js'

export default {
  data() {
    return {
      pieceId: "outerBottom",
      pieces: ["none","evepants01","evepants02","evepants03","evepants04"]
    }
  },
  props : {
    type : {
      default : "set-outer-bottom"
    },
    urlPath :{ default: "src/assets/images/bottoms/outer/"}
  },
  partials : {
    outerBottom : '<div class="outer-bottom"><img :src="url(item)"/></div>'
  },
  ready() {
    this.gotoSlide(this.pieces.indexOf(this.$parent.$parent.outerBottom))
  },
  mixins: [mix]
}
</script>
