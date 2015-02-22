define(function(require) {
    'use strict';

    var Backbone = require('backbone');

    var User = Backbone.Collection.extend({
        // model defaults
        defaults: {
            name: 'GDI Boston Leader'
        },

        // initialize function
        initialize: function () {
            console.log('A model instance named ' + this.get('name') + ' has been created.');

            this.on('change', function() {
                console.log("The user model for " + this.get('name') + " has changed.");
            });
        }
    })

    return User;
})