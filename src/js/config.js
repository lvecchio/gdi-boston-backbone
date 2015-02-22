// RequireJS config
requirejs.config({
    baseUrl: '..',
    paths: {
        jquery: 'bower_components/jquery/dist/jquery.min',
        backbone: 'bower_components/backbone/backbone',
        underscore: 'bower_components/underscore/underscore',
        lodash: 'bower_components/lodash/lodash.min'
    },
    shim: {
        backbone: {
            exports: "Backbone",
            deps: ["underscore", "jquery"]
        }
    }
});



// load main app file
requirejs(['src/js/main']);

