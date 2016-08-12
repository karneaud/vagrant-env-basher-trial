<template id="slider" src="./pieces.vue"></template>
<script>
import mix from '../libs/vue.mixin.js'

export default {
  props: {
    type: {
      default: 'set-shoes'
    },
    urlPath: {
      default: 'src/assets/images/shoes/'
    }
  },
  data () {
    return {
      pieceId: 'shoes',
      pieces: ['shoes00', 'shoes01', 'shoes02', 'shoes03', 'shoes04', 'shoes05']
    }
  },
  ready () {
    this.gotoSlide(this.pieces.indexOf(this.$parent.$parent.shoes))
  },
  partials: {
    shoes: '<div class="shoe"><img :src="url(item)"/></div>'
  },
  mixins: [mix]
}
</script>
