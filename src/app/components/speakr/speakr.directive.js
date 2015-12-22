(function() {
    'use strict';

    angular
        .module('nooStim')
        .directive('speakr', ['$window', '$timeout', 'SpeakrService', 'malarkey', function($window, $log, $timeout, SpeakrService, malarkey) {
            var directive = {
                restrict: 'E',
                scope: {
                    extraValues: '='
                },
                template: '<div layout="row"><md-button class="md-raised" ng-click="vm.sayMantra()">mantra</md-button><div class="mantra-text"></div></div>',
                link: linkFunc,
                controller: ['$scope', '$window', '$log', '$timeout', 'SpeakrService', 'malarkey', function($scope, $window, $log, $timeout, SpeakrService, malarkey) {
                    var vm = this;
                    vm.mantra = "";
                    vm.sayMantra = function() {

                        return getMantra().then(function() {
                            if ($window.SpeechSynthesisUtterance) {
                                var message = new SpeechSynthesisUtterance();
                                message.lang = "en-GB";
                                message.pitch = 1;
                                message.rate = 1;
                                message.text = vm.mantra;
                                $window.speechSynthesis.speak(message);

                            }
                            var typist = malarkey($scope.el.find(".mantra-text")[0], {
                                typeSpeed: 40,
                                deleteSpeed: 40,
                                pauseDelay: 800,
                                loop: true,
                                postfix: ' '
                            });
                            typist.type(vm.mantra).pause().delete();

                        });
                    }

                    function getMantra() {
                        return SpeakrService.getWords(3).then(function(data) {
                            vm.mantra = data;

                            return vm.mantra;
                        });
                    }
                    $log.info('Activated Speakr Directive');
                }],
                controllerAs: 'vm'
            };

            return directive;

            function linkFunc(scope, el, attr, vm) {
                scope.el = el;
                

            }
        }]);
})();