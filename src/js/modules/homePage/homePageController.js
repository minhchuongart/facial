(function(angular) {
    youtubeApp.controller('homePageController', ['$scope', '$state', 'searchService', '$stateParams',
        function($scope, $state, searchService, $stateParams) {
			//document.title = 'Youtube in US';
            $scope.videoCategories = [{
                'snippet': {
                    'title': 'Popular Now'
                }
            }, {
                'id': 10,
                'snippet': {
                    'title': 'Music'
                }
            }, {
                'id': 23,
                'snippet': {
                    'title': 'Comedy'
                }
            }, {
                'id': 1,
                'snippet': {
                    'title': 'Film & Animation'
                }
            }, {
                'id': 17,
                'snippet': {
                    'title': 'Sports'
                }
            }, {
                'id': 28,
                'snippet': {
                    'title': 'Technology'
                }
            }, {
                'id': 2,
                'snippet': {
                    'title': 'Vlogs'
                }
            }, {
                'id': 15,
                'snippet': {
                    'title': 'People & Blogs'
                }
            }, {
                'id': 20,
                'snippet': {
                    'title': 'Video Game'
                }
            }]
        }
    ]);
})(window.angular);
