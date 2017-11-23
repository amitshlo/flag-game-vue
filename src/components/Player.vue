<template>
    <div class="player" ref="player" v-bind:style="plStyle"></div>
</template>

<script>
var size = 30

export default {
  name: 'Player',
  props: ['initTop', 'initLeft', 'controls', 'color', 'rules', 'human', 'strategy'],
  data () {
    return {
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
    if (!this.human) {
      let stInterval
      setInterval(() => {
        clearInterval(stInterval)
        let moveDir = this.strategy.getMoveDir()
        stInterval = setInterval(() => {
          this.move(this.$refs.player, moveDir.top, moveDir.left)
        }, 10)
      }, this.strategy.getAskTime())
    }
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
      if (this.rules.isInArena(newTop, size)) {
        playerRef.style.top = newTop + 'px'
      } else {
        clearInterval(this.intervalId)
      }

      var newLeft = playerRef.offsetLeft + left
      if (this.rules.isInArena(newLeft, size)) {
        playerRef.style.left = newLeft + 'px'
      } else {
        clearInterval(this.intervalId)
      }

      let hit = this.rules.isOnFlag(newTop, newLeft, size, this.color)
      if (hit) {
        this.$emit('hit', {id: hit.id, color: this.color})
      }
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
