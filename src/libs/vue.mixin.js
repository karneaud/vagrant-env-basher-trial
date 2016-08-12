import $ from 'jquery'

export default {
  ready () {
    let self = this
    $('.slider').on('afterChange', function (e, s, c, n) {
      self.$dispatch('slick-after-change', c)
    }).slick({ infinite: true, slidesToShow: 3, slidesToScroll: 1, centerMode: true, dots: false, edgeFriction: 0.001 })
  },
  beforeDestroy () {
    $('.slider').slick('unslick')
  },
  replace: true,
  events: {
    'slick-after-change': function (i) {
      this.pick(i)
    }
  },
  el () { return '.slider' },
  template: '#slider',
  methods: {
    gotoSlide: function (i) {
      $('.slider').slick('slickGoTo', i)
    },
    pick: function (i) {
      this.$dispatch(this.type, this.pieces[i])
    },
    url: function (item) {
      let url = 'src/assets/images/none.png'
      if (item !== 'none') {
        url = this.urlPath + item + '.png'
      }
      return url
    }
  }
}
