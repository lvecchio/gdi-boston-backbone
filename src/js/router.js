define(function(require) {

   'use strict';

    var Backbone = require('backbone');

    var Router = Backbone.Router.extend({
        routes: {
            '':         'index',    // home
            'team':     'team',     // #team
            'classes':  'classes'   // #classes
        },

        index: function() {
            console.log('home');
        },

        team: function() {

            $('#users').html( "hello" );
            console.log('team');
        }

    });

    return new Router();
});
