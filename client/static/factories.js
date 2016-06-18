myAppModule.factory('dFactory', function($http) {
    var users = [];
    var topics = []
    var posts = []
    var category = []
    var session = {};
    var comments = [];
    var factory = {};
    factory.createUser = function(newUser, callback) {
        $http.post('/adduser', newUser)
            .success(function(data) {
                callback(data)
            });
    }
    factory.addcurrent = function(newUser) {
        $http.post('/addcurrent', newUser)
            .success(function() {});
    }
    factory.getCurrent = function(callback) {
        $http.get('/currentuser')
            .success(function(data) {
                session = data
                callback(data)
            });
    }
    factory.addPost = function(post) {
        $http.post('/addpost', post)
            .success(function(post) {});
    }
    factory.addComment = function(newComment, callback) {
        $http.post('/addcomment', newComment)
            .success(function(newComment) {});
    }
    factory.createTopic = function(topic) {
        $http.post('/addtopic', topic)
            .success(function(topic) {});
    }
    factory.getUsers = function(callback) {
        $http.get('/users').success(function(output) {
            callback(output);
        });
    }
    factory.getPosts = function(callback) {
        $http.get('/posts').success(function(output) {
            callback(output);
        });
    }
    factory.getComments = function(callback) {
        $http.get('/comments').success(function(output) {
            callback(output);
        });
    }
    factory.getTopics = function(callback) {
        $http.get('/topics').success(function(output) {
            callback(output);
        });
    }
    factory.getCategory = function(callback) {
        $http.get('/category').success(function(output) {
            callback(output);
        });
    }
    factory.findOne = function(id, callback) {
        $http.get('/user/' + id).success(function(output) {
            callback(output[0])
        })
    }
    factory.findTopic = function(id, callback) {
        $http.get('/topic/' + id).success(function(output) {
            callback(output)
        })
    }
    factory.findPosts = function(id, callback) {
        $http.get('/posts/' + id).success(function(output) {
            callback(output)
        })
    }
    factory.reset = function() {
        $http.get('/reset').success(function(output) {
            console.log('resetted')
        });
    }
    return factory;
})
