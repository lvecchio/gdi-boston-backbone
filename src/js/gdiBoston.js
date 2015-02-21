var user1 = new app.user({
    name: 'Laura Vecchio',
    description: 'Chapter Leader & Teacher'
})

var user2 = new app.user({
    name: 'Liz Long',
    description: 'Chapter Leader'
})


// instantiate users collection
var users = new app.UsersCollection([
   user1, user2
]);

console.log(users.toJSON());