<template>
    <div class="player" ref="player" v-bind:style="plStyle"></div>
</template>

<script>
var size = 30

export default {
  name: 'Player',
  props: ['initTop', 'initLeft', 'controls', 'arenaSize', 'color'],
  data () {
    return {
      size: 30,
      plStyle: {
        top: this.initTop,
        left: this.initLeft,
        background: this.color,
        height: size + 'px',
        width: size + 'px'
      },
      key: undefined,
      intervalId: undefined
    }
  },
  created: function () {
    window.addEventListener('keydown', this.run)
  },
  methods: {
    run: function (event) {
      if (this.controls.indexOf(event.code) !== -1) {
        this.key = event.code
      }
      clearInterval(this.intervalId)
      this.intervalId = setInterval(this.movePlayer, 10)
    },
    movePlayer: function () {
      switch (this.key) {
        case this.controls[0]:
          this.move(this.$refs.player, -1, 0)
          break
        case this.controls[1]:
          this.move(this.$refs.player, 0, 1)
          break
        case this.controls[2]:
          this.move(this.$refs.player, 1, 0)
          break
        case this.controls[3]:
          this.move(this.$refs.player, 0, -1)
          break
      }
    },
    move: function (playerRef, top, left) {
      var newTop = playerRef.offsetTop + top
      if (newTop < (this.arenaHeight - size) && newTop > 0) {
        playerRef.style.top = (playerRef.offsetTop + top) + 'px'
      } else {
        clearInterval(this.intervalId)
      }

      var newLeft = playerRef.offsetLeft + left
      if (newLeft < (this.arenaWidth - size) && newLeft > 0) {
        playerRef.style.left = newLeft + 'px'
      } else {
        clearInterval(this.intervalId)
      }

      this.$emit('moved', { newTop, newLeft, size })
    }
  },
  computed: {
    arenaHeight: function () {
      return parseInt(this.arenaSize.height.slice(0, -2))
    },
    arenaWidth: function () {
      return parseInt(this.arenaSize.height.slice(0, -2))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .player {
      position: absolute;
      border-radius: 50%;
  }
</style>
