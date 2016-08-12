<template>
<nav id="outer_container" class="outer_container" >
<a class="menu_button" href="#" title="Toggle"></a>
<ul class="menu_option">
<li v-for="(index, item) in items">
  <a href="#" v-on:click="view(index)" id="{{* item}}-menu-item"><span>{{* item }}</span></a>
</li>
</ul>
</nav>
</template>
<script>
import $ from 'jquery'
import '../libs/jquery.menu.js'

export default {
  data () {
    return {
      items: ['skin', 'hair', 'outer-top', 'outer-bottom', 'shoes']
    }
  },
  methods: {
    view: function (i) {
      this.$dispatch('view-change', this.items[i])
    }
  },
  ready () {
    $('#outer_container').PieMenu({'starting_angel': 0, 'angel_difference': -90, 'radius': 160})
  }
}
</script>
