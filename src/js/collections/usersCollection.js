//namespace
var app = app || {};

app.UsersCollection = Backbone.Collection.extend({
    model: app.user
});