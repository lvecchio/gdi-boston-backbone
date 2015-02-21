// namespace
var app = app || {};

// the view for all users
app.usersView = Backbone.View.extend({
    tagName: 'section',
    className: 'users',

    render: function() {
        this.collection.each(this.addUser, this);
        return this; // allows this method to be chained
    },

    addUser: function(user) {
        var userView = new app.userView({ model: user });
        this.$el.append(userView.render().el);
    }

});