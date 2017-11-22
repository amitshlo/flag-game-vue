<template>
  <div>
    <h2>Capture the flag!</h2>
    <div class="arena" v-bind:style="arenaSize">
      <div class="flag"></div>
      <vue-player 
        v-bind:initTop="'50px'" 
        v-bind:initLeft="'100px'"
        v-bind:color="'blue'"
        v-bind:arenaSize="arenaSize"
        v-bind:controls="['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft']">
      </vue-player>
      <vue-player 
        v-bind:initTop="'200px'" 
        v-bind:initLeft="'300px'"
        v-bind:color="'green'"
        v-bind:arenaSize="arenaSize"
        v-bind:controls="['KeyW', 'KeyD', 'KeyS', 'KeyA']">
      </vue-player>
    </div>
  </div>
</template>

<script>
import Player from './Player'
import IntersectService from '../services/intersect'

export default {
  name: 'Arena',
  data () {
    return {
      arenaSize: {
        width: '400px',
        height: '400px'
      }
    }
  },
  created: function () {
    let x = new IntersectService()
    console.log(x)
    x.setRectnagles(['lalal'])
  },
  methods: {},
  components: {
    'vue-player': Player
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

  .flag {
      position: absolute;
      width:50px;
      height:50px;
      background: #484848;
      left: 100px;
      top: 50px;
  }
</style>
