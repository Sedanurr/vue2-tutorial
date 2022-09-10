<template>
  <div id="app">
  <h1>{{title}}</h1>
  <p>{{greeting()}}</p>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      title:'Your first Vue file,wooo!'
    }
  },
  methods: {
    greeting: function() {
      return 'heeyyyy cowboy!'
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
