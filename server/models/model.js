var mongoose = require('mongoose'), Schema = mongoose.Schema

var User = new mongoose.Schema({
        name:  String,
        date:  {type:Date,default:new Date},
      topics:  [{ type: mongoose.Schema.Types.Mixed, ref: "Topic" }],
       posts:  [{ type: mongoose.Schema.Types.Mixed, ref: "Post" }],
    comments:  [{ type: mongoose.Schema.Types.Mixed, ref: "Comment"}]

});

var Post = new mongoose.Schema({
        text:  String,
   _comments:  [{type:Schema.Types.ObjectId, ref: 'Comment'}],
      _topic:  {type:Schema.Types.ObjectId, ref: 'Topic'},
       _user:  {type:Schema.Types.ObjectId, ref: 'User'},
        date:  {type:Date,default:new Date},
        down:  Number,
          up:  Number
});

var Comment = new mongoose.Schema({
     _user:  {type:Schema.Types.ObjectId, ref: 'User'},
     _post:  {type:Schema.Types.ObjectId, ref: 'Post'},
      text:  String

});

var Category = new mongoose.Schema({
      name:  String
});
var Session = new mongoose.Schema({
      _user:  {type:Schema.Types.ObjectId, ref: 'User'}
});

var Topic = new mongoose.Schema({
         name:  String,
  description:  String,
    _category:  {type:Schema.Types.ObjectId, ref: 'Category'},
        _user:  {type:Schema.Types.ObjectId, ref: 'User'},
        _post:  [{type:Schema.Types.Mixed, ref: 'Post'}]
});

var Topic = mongoose.model('Topic', Topic);
var Category = mongoose.model('Category', Category);
var Comment = mongoose.model('Comment', Comment);
var Post = mongoose.model('Post', Post);
var User = mongoose.model('User', User);
var Session = mongoose.model('Session', Session);
