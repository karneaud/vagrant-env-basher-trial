<template>
  <div id="slider-panel">
    <component :is="view" transition="slidein" transition-mode="out-in"></component>
  </div>
</template>
<script>
import skin from './colours'
import hair from './wigs.vue'
import outerTop from './tops-outer'
import outerBottom from './bottoms-outer'
import shoes from './shoes'

export default {
  components: {
    'skin-component': skin,
    'shoes-component': shoes,
    'hair-component': hair,
    'outer-top-component': outerTop,
    'outer-bottom-component': outerBottom
  },
  data () {
    return {
      view: 'skin-component'
    }
  },
  events: {
    'view-change': function (view) { this.$set('view', view + '-component') }
  }
}
</script>
