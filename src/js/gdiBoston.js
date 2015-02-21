var user1 = new app.userModel({
    name: 'Laura Vecchio',
    description: 'Chapter Leader & Teacher'
});

var user2 = new app.userModel({
    name: 'Liz Long',
    description: 'Chapter Leader'
});

var user3 = new app.userModel({
    name: 'Annette Arabasz',
    description: 'Chapter Leader'
});




// instantiate users collection
var users = new app.usersCollection([
   user1, user2
]);

// instantiate users view
var usersView = new app.usersView({ collection: users });
$('#users').html(usersView.render().el);