var mongoose = require('mongoose')
var User = mongoose.model('User')
var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')
var Topic = mongoose.model('Topic')
var Category = mongoose.model('Category')
var Session = mongoose.model('Session')

module.exports = {
  reSet: function(req,res){
      Session.remove({}, function(err){
        if(err){console.log('reseterr', err)}else{res.json()}
      })
      }
  ,
  currentuser: function(req,res){
      Session.find({}).populate('_user').exec(function(err, user){
        if(err){console.log('currentuser err', err)}else{res.json(user)}
      })
      }
  ,
  addcurrent: function(req, res){
    console.log(req.body)
    var user = new Session({_user: req.body._id});
  user.save(function(err, user) {
    if(err) {
      console.log('something went wrong', err);
      res.redirect('/');
    }
    else {
      console.log('successfully added an session user!');
      res.json(user);
    }
  })
},

findPosts: function(req,res){
    Post.find({_topic:req.params.id}).populate('_user').populate('_comments').populate('_topic').exec(function(err, post){
      if(err){console.log('findposts err:', err)}else{res.json(post)}
    })
},
findTopic: function(req,res){
  Topic.find({_id:req.params.id}).populate('_user').populate('_post').populate('_category').exec(function(err, topic){
    if(err){console.log('findtopic err:',err)}else{res.json(topic)}
  })
},
   getUsers: function(req,res){
     User.find({}).populate('topics').populate('posts').populate('comments').exec(function (err, user){
       if(err){console.log(err)}else{res.json(user)}
     })
},
  getPosts: function(req,res){
    Post.find({}).populate('_comments').populate('_user').populate('_topic').exec(function(err, post){
      if(err){
        console.log(err);
        res.redirect('/')
      }else{
          res.json(post)
        }
    })
  },
    getComments: function(req,res){
      Comment.find({}).populate('_post').populate('_user').exec(function(err, comment){
     if(err){
       console.log('something wrong', err)
     }
     else {

       res.json(comment)
     }
    })
    },
    getTopics: function(req,res){
      Topic.find({}).populate('_category').populate('_user').populate('_post').exec(function(err, topic){
        if(err){
          console.log(err);
          res.redirect('/')
        }else{
            res.json(topic)
          }
      })
    },
    getCategory: function(req,res){
      Category.find({}).exec(function(err, cate){
        if(err){
          console.log(err);
          res.redirect('/')
        }else{
            res.json(cate)
          }
      })
    },
    findOne: function(req,res){
      User.find({ _id:req.params.id},function(err, data){
        if(err){console.log(err)}
        else{res.json(data)}
      })
    },
  addUser: function(req, res){
    req.session = {current: req.body.name};
    var user = new User({name: req.body.name});
  user.save(function(err, user) {
    if(err) {
      console.log('something went wrong', err);
      res.redirect('/');
    }
    else {
      console.log('successfully added an user!');
      res.json(user);
    }
  })
},
addPost: function(req, res){
    var post = new Post({
           text: req.body.text,
          _user: req.body.user,
          _topic: req.body.topic,
          down:0,
          up:0     });
  post.save(function(err){
    if(err){console.log(err)}else{console.log('good')}
  })
},
addTopic: function(req, res){
  var topic = new Topic({
           name: req.body.name,
    description: req.body.description,
      _category: req.body.category,
          _user: req.body.user
  });
topic.save(function(err, output) {
  if(err) {
    console.log('something went wrong', err);
    res.redirect('/');
  }
  else {
    console.log('successfully added an topic!');
    res.redirect('/');
  }
})
},
addComment: function(req, res){
    var comment = new Comment({
      _user: req.body.user,
      text: req.body.text,
      _post: req.body.post
    });
    // console.log("ZZZZZ", comment)
    comment.save(function(err){
        if(err){
          console.log(err)
        }
        else{res.json(comment)}
      })


}
}
