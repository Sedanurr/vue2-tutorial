<template>
  <div id="app">
  <h1>{{title}}</h1>
  <ninjasApp />
  </div>
</template>

<script>
import NinjasApp from './NinjasApp.vue';


export default {
    name: "App",
    data() {
        return {
            title: "Ninja App!"
        };
    },
    components: { NinjasApp }
}
</script>

<style scoped>
  h1{
    color:purple
  }
</style>
