<template>
  <div class="flag" v-bind:style="initPos"></div>
</template>

<script>
export default {
  name: 'Flag',
  props: ['flagStyle', 'flagColor'],
  data () {
    return {
      initPos: {
        top: this.flagStyle.top + 'px',
        left: this.flagStyle.left + 'px',
        background: this.flagColor
      }
    }
  },
  created: function () {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flag {
      position: absolute;
      width:50px;
      height:50px;
  }
</style>
