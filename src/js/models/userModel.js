// namespace
var app = app || {};

// teacher model
app.user = Backbone.Model.extend({

    // model defaults
    defaults: {
        name: 'GDI Boston Leader'
    },

    // initialize function
    initialize: function () {
        console.log('A model instance named ' + this.get('name') + ' has been created.');
    }
});