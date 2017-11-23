<template>
  <div class="container">
    <h2>Capture the flag!</h2>
    <div class="arena" v-bind:style="arenaSize">
      <vue-flag v-for="flag in flags"
        v-bind:flagStyle="flag"
        v-bind:flagColor="flag.color"
        :key="flag.id + flag.color">
      </vue-flag>
      <vue-player 
        v-bind:initTop="'50px'" 
        v-bind:initLeft="'100px'"
        v-bind:color="'pink'"
        v-bind:controls="['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft']"
        v-bind:rules="rules"
        v-bind:human="true"
        v-on:hit="hit">
      </vue-player>
      <vue-player 
        v-bind:initTop="'200px'" 
        v-bind:initLeft="'300px'"
        v-bind:color="'blue'"
        v-bind:controls="['KeyW', 'KeyD', 'KeyS', 'KeyA']"
        v-bind:rules="rules"
        v-bind:human="true"
        v-bind:strategy="strategies[0]"
        v-on:hit="hit">
      </vue-player>
      <vue-player 
        v-bind:initTop="'200px'" 
        v-bind:initLeft="'300px'"
        v-bind:color="'green'"
        v-bind:rules="rules"
        v-bind:human="false"
        v-bind:strategy="strategies[0]"
        v-on:hit="hit">
      </vue-player>
      <vue-player 
        v-bind:initTop="'200px'" 
        v-bind:initLeft="'300px'"
        v-bind:color="'orange'"
        v-bind:rules="rules"
        v-bind:human="false"
        v-bind:strategy="strategies[1]"
        v-on:hit="hit">
      </vue-player>
    </div>
  </div>
</template>

<script>
import Player from './Player'
import Flag from './Flag'
import { Rules } from '../services/rules'
import { AIStupidStrategy } from '../services/strategies/ai-stupid'
import { AISmartStrategy } from '../services/strategies/ai-smart'

var arena = 400

export default {
  name: 'Arena',
  data () {
    return {
      arenaSize: {
        width: arena + 'px',
        height: arena + 'px'
      },
      flags: [
        {id: 1, top: 50, left: 100, color: 'gray'},
        {id: 2, top: 200, left: 250, color: 'gray'},
        {id: 3, top: 100, left: 70, color: 'gray'},
        {id: 4, top: 300, left: 50, color: 'gray'}
      ],
      strategies: [],
      rules: undefined
    }
  },
  created: function () {
    this.strategies = [
      new AIStupidStrategy(),
      new AISmartStrategy(this.flags)
    ]
    this.rules = new Rules(arena, this.flags, 50)
  },
  methods: {
    hit: function (event) {
      let choosenFlag = undefined
      this.flags = this.flags.filter((flag) => {
        if (flag.id === event.id) {
          choosenFlag = flag
        }
        return flag.id !== event.id
      })
      this.flags.push(Object.assign({}, choosenFlag, {color: event.color}))
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
  h2 {
    font-weight: normal;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .arena {

    position: relative;
    background: #cdcdcd;
  }
</style>
