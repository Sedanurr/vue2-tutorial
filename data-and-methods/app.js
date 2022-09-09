new Vue({
    el:'#vue-app',
    data: {
        name: 'Seda',
        job: 'software engineer'
    },
    methods: {
        greet: function(time) {
            return 'Good' + time + ' ' +this.name;
        }
    }
});