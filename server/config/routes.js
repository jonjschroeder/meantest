console.log('routes');
let friends = require('./../controllers/friends')
module.exports = function(app){
app.get('/all_friends', function(req, res) {
  friends.get_all_friends(req, res);
});
app.get('/friends/:id', function(req, res) {
  friends.show(req, res);
});
// app.post('/friends', function(req, res) {
//   friends.create(req, res);
// });
app.put('/friends/:id', function(req, res) {
  friends.update(req, res);
});
app.delete('/friends/:id', function(req, res) {
  friends.delete(req, res);
});
app.post('/friends/new', function(req, res) {
  friends.create(req, res);
});
}
