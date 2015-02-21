// namespace
var app = app || {};

app.router = Backbone.Router.extend({
    routes: {
        'team':     'team',     // #team
        'classes':  'classes',  // #classes
        '*page':    'default'   // any page that doesn't match the above routes
    },

    team: function() {

        // instantiate users view
        var usersView = new app.usersView({ collection: users });
        $('#users').html(usersView.render().el);

    },

    classes: function() {

    }
});

app.router.init = new app.router;

// allows back button to still trigger route methods
Backbone.history.start();