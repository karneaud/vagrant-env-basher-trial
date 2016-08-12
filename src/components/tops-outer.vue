<template id="slider" src="./pieces.vue"></template>
<script>
import mix from '../libs/vue.mixin.js'

export default {
  data() {
    return {
      pieceId: "outerTop",
      pieces: ["none","tee01","tee02","tee03","tee04","tee05","dress01","dress02","dress03","dress04","dress05"]
    }
  },
  props : {
    type : {
      default : "set-outer-top"
    },
    urlPath : {
      default : "src/assets/images/tops/outer/"
    }
  },
  ready() {
    this.gotoSlide(this.pieces.indexOf(this.$parent.$parent.outerTop))
  },
  partials : {
    outerTop : '<div class="outer-top"><img :src="url(item)"/></div>'
  },
  mixins: [mix]
}
</script>
