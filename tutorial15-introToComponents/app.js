Vue.component('greeting',{
    template:'<p>Hey there,I am a {{name}}. <button v-on:click="changeName">Change Name</button></p>',
    data: function() {
        return {
            name:'Seda'
        }
    },
    methods: {
        changeName: function() {
            this.name = 'Burak'
        }
    }
})

const one = new Vue({
  el: "#vue-app-one",
});
const two = new Vue({
    el: "#vue-app-two",
  });
