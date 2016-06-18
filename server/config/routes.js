var board = require('../controllers/con.js')
module.exports = function(app){

    app.get('/users', function(req, res) {
      board.getUsers(req, res)
    })
    app.get('/comments', function(req, res) {
      board.getComments(req, res)
    })
    app.get('/posts', function(req, res) {
      board.getPosts(req, res)
    })
    app.get('/topics', function(req, res) {
      board.getTopics(req, res)
    })
    app.get('/category', function(req, res) {
      board.getCategory(req, res)
    })
    app.post('/addtopic', function(req, res) {
      board.addTopic(req, res)
    })
    app.post('/addpost', function(req, res) {
      board.addPost(req, res)
    })
    app.post('/addcomment', function(req, res) {
      board.addComment(req, res)
    })
    app.post('/adduser', function(req, res) {
      board.addUser(req, res)
    })
    app.get('/user/:id', function(req, res) {
      board.findOne(req, res)
    })
    app.get('/topic/:id', function(req, res) {
      board.findTopic(req, res)
    })
    app.get('/posts/:id', function(req, res) {
      board.findPosts(req, res)
    })
    app.get('/currentuser', function(req, res) {
      board.currentuser(req, res)
    })
    app.post('/addcurrent', function(req, res) {
      board.addcurrent(req, res)
    })
    app.get('/reset', function(req, res) {
      board.reSet(req, res)
    })




}
