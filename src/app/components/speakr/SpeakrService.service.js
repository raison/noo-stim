(function() {
    'use strict';

    angular
        .module('nooStim')
        .factory('SpeakrService', ['$http', '$q', '$log', function($http, $q, $log) {
            var apiHost = 'http://randomword.setgetgo.com/get.php';

            var service = {
                getWords: getWords
            };

            return service;

            function getWord() {
                var deferred = $q.defer();
                return $http.get(apiHost)
                    .then(getWordComplete)
                    .catch(getWordFailed);

                function getWordComplete(response) {
                    return response.data;
                }

                function getWordFailed(error) {
                    $log.error('XHR Failed for getting a word.\n' + angular.toJson(error.data, true));
                }
                return deferred.promise;

            }

            function getWords(num) {
                var calls = [];
                for (var i = 0; i < num; i++) {
                    calls.push(getWord())
                }
                return $q.all(calls)
                    .then(function(results) {
                        var resultStr = "";
                        results.forEach(function(val) {
                            resultStr = resultStr + (val + " ");
                        });
                        return resultStr;
                    });
            }
        }]);
})();