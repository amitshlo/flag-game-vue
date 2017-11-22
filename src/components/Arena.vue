<template>
  <div>
    <h2>Capture the flag!</h2>
    <div class="arena" v-bind:style="arenaSize">
      <vue-flag v-for="flag in flags"
        v-bind:flagStyle="flag"
        :key="flag.id">
      </vue-flag>
      <vue-player 
        v-bind:initTop="'50px'" 
        v-bind:initLeft="'100px'"
        v-bind:color="'blue'"
        v-bind:arenaSize="arenaSize"
        v-bind:controls="['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft']"
        v-on:moved="moved">
      </vue-player>
      <vue-player 
        v-bind:initTop="'200px'" 
        v-bind:initLeft="'300px'"
        v-bind:color="'green'"
        v-bind:arenaSize="arenaSize"
        v-bind:controls="['KeyW', 'KeyD', 'KeyS', 'KeyA']"
        v-on:moved="moved">
      </vue-player>
    </div>
  </div>
</template>

<script>
import Player from './Player'
import Flag from './Flag'

export default {
  name: 'Arena',
  data () {
    return {
      arenaSize: {
        width: '400px',
        height: '400px'
      },
      flags: [
        {id: 1, top: 50, left: 100, color: 'gray'},
        {id: 2, top: 200, left: 250, color: 'gray'}
      ]
    }
  },
  created: function () {},
  methods: {
    moved: function (event) {
      var flagTop = 50
      var flagLeft = 100
      var flagSize = 50
      if (event.newTop > flagTop && event.newLeft > flagLeft &&
        (flagLeft + flagSize) > (event.newLeft + event.size) &&
        (flagTop + flagSize) > (event.newTop + event.size)) {
        console.log('on it!')
      }
    }
  },
  components: {
    'vue-player': Player,
    'vue-flag': Flag
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  a {
    color: #42b983;
  }

  .arena {
      position: relative;
      background: #cdcdcd;
  }
</style>
