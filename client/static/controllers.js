myAppModule.controller('indecController', function($scope, dFactory, $location) {
    $scope.users = [];
    $scope.sess = {};
    $scope.user = {};
    function init() {
        dFactory.reset()
    }
    init()
    $scope.createUser = function() {
        if ($scope.newUser != undefined) {
            dFactory.createUser($scope.newUser, function(data) {
                dFactory.addcurrent(data)
                $location.path('/dashboard')
            })
        }
    }
})
myAppModule.controller('dashController', function($scope, dFactory, $routeParams) {
    $scope.posts = [];
    $scope.topics = [];
    $scope.users = [];
    $scope.category = [];
    $scope.user = [];
    function init() {
        dFactory.getPosts(function(post) {
            $scope.posts = post;
        });
        dFactory.getUsers(function(user) {
            $scope.users = user;
        });
        dFactory.getTopics(function(topic) {
            $scope.topics = topic;
        });
        dFactory.getCategory(function(cate) {
            $scope.category = cate;
        });
        dFactory.getCurrent(function(data) {
            $scope.user = data;
        });
    };
    init();
    $scope.addTopic = function(topic) {
        if (topic != undefined) {
            topic.user = $scope.user[0]._user._id
            dFactory.createTopic(topic)
            init();
        }
        $scope.newTopic = undefined;
    }
})
myAppModule.controller('topicController', function($scope, dFactory, $routeParams) {
    var id = $routeParams.id
    $scope.posts = [];
    $scope.topic = [];
    $scope.users = [];
    $scope.category = [];
    $scope.comments = [];

    function init() {
        dFactory.findTopic(id, function(topic) {
            $scope.topic = topic;
            dFactory.findPosts(id, function(posts) {
                $scope.posts = posts;
                dFactory.getComments(function(cmts) {
                    $scope.comments = cmts;

                })
            })
        })
        dFactory.getCurrent(function(data) {
            $scope.user = data;
        });
    };
    init();

    $scope.addPost = function(newPost) {
        if (newPost != undefined) {
            newPost.topic = id
            newPost.user = $scope.user[0]._user._id
            dFactory.addPost(newPost)
        }
        $scope.newPost = undefined;
        init()
    }
    $scope.addComment = function(newComment, post) {
        if (newComment != undefined) {
            newComment.user = $scope.user[0]._user._id
            newComment.post = post._id
            dFactory.addComment(newComment, function(cmt) {
                $scope.cmts = cmt;
            })
        }
        $scope.newComment = undefined;
        init()
    }
})
myAppModule.controller('userController', function($scope, dFactory, $routeParams) {
    $scope.user = {};
    $scope.id = $routeParams.id
    function init() {
        dFactory.findOne($scope.id, function(data) {
            $scope.user = data;
        })
    }
    init();
})
