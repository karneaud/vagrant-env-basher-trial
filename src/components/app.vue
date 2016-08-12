<template>
<section>
    <menu-component></menu-component>
    <h2>Create Your MIA</h2>
    <article>
      <slider-component></slider-component>
      <mia-component :colour="colour" :hair="hair" :shoes="shoes" :outer-top="outerTop" :outer-bottom="outerBottom"></mia-component>
    </article>
  </section>
</template>
<script>
import $ from 'jquery'
import 'imports?jQuery=jquery!slick-carousel'
import slider from './slider'
import menu from './menu'
import mia from './diagram.vue'

export default {
  props : ["colour","hair","outerTop","outerBottom"],
  components : {
  "slider-component" : slider,
  "menu-component" : menu,
  "mia-component" : mia
  },
  events : {
    'set-colour' : function(colour) {
        this.$set("colour", colour)
    },
    "set-hair" : function(piece) {
      this.$set("hair", piece)
    },
    "set-outer-top" : function(piece) {
      this.$set("outerTop", piece)
    },
    "set-outer-bottom" : function(piece) {
      this.$set("outerBottom",piece)
    },
    "set-shoes" : function(piece) {
      this.$set("shoes",piece)
    },
    "view-change" : function(view){
        this.$broadcast("view-change", view)
    }
  }
}


</script>
