new Vue({
    el: "#vue-app",
    data: {
        a:0,
        b:0,
        age:25
   
    },
    methods: {
   
    },computed: {
        addToA: function() {
            console.log("add a");
            return this.age + this.a
         },
         addToB: function() {
            console.log("add b");
             return this.age + this.b
         }
    },
  });
  