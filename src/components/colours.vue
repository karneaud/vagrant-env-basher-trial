<template id="slider" src="./pieces.vue"></template>
<script>
import mix from '../libs/vue.mixin.js'

export default {
  props: {
    type: {
      default: 'set-colour'
    }
  },
  data () {
    return {
      pieceId: 'colours',
      pieces: ['#663333', '#996633', '#CC9966', '#CC9999', '#907051', '#613A1B', '#C7B297', '#5F3B1B', '#CF9B61', '#8F6438', '#71523D', '#956330', '#BFB697', '#AC794A', '#CFB09C']
    }
  },
  partials: {
    colours: '<div class="colour" :style="{ backgroundColor: item }"><a v-on:click.stop.prevent="pick(index)"><img :src="background ()"/></a></div>'
  },
  ready () {
    this.gotoSlide(this.pieces.indexOf(this.$parent.$parent.colour))
  },
  methods: {
    pick: function (i) {
      this.$dispatch('set-colour', this.pieces[i])
    },
    background: function () {
      return require('../assets/thebody.png')
    }
  },
  mixins: [mix]
}
</script>
