// namespace
var app = app || {};

// the view for a single user model
app.userView = Backbone.View.extend({

    tagName: 'div',
    className: 'user',
    template: _.template( $('#userView').html() ),

    render: function() {
        var userTemplate = this.template(this.model.toJSON());
        this.$el.html(userTemplate);
        return this;
    }

});