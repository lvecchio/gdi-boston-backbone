define(function(require) {
    'use strict';

    var Backbone = require('backbone');

    var User = require('../models/userModel');

    var UserCollection = Backbone.Collection.extend({
        model: User
    })

    return UserCollection;
})