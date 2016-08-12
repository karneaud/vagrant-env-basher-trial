<template id="slider" src="./pieces.vue"></template>
<script>
import mix from '../libs/vue.mixin.js'

export default {
  props : {
    type: {
      default: "set-hair"
    },
    urlPath: {
      default: "src/assets/images/wigs/"
    }
  },
  data() {
    return {
      pieceId : "wigs",
      pieces: ["hair00","hair01","hair02","hair03","hair04","hair05"]
    }
  },
  ready() {
    this.gotoSlide(this.pieces.indexOf(this.$parent.$parent.hair))
  },
  partials : {
    wigs : '<div class="wig"><img :src="url(item)"/></div>'
  },
  mixins: [mix]
}
</script>
