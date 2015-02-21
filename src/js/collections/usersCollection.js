//namespace
var app = app || {};

app.usersCollection = Backbone.Collection.extend({
    model: app.user
});