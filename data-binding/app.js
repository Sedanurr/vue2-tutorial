new Vue({
    el:'#vue-app',
    data: {
        name: 'Seda',
        job: 'software engineer',
        website:'http://google.com',
        websiteTag: '<a href="http://google.com">Google!</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good' + time + ' ' +this.name;
        }
    }
});