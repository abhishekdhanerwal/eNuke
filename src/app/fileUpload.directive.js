(function () {
    'use strict';

    angular.module('app').directive('onReadFile', onReadFile);

    onReadFile.$inject = ['$parse'];

    function onReadFile($parse) {
        return {
            restrict: 'A',
            scope: false,
            link: function(scope, element, attrs) {
                var fn = $parse(attrs.onReadFile);

                element.on('change', function(onChangeEvent) {
                    var reader = new FileReader();

                    reader.onload = function(onLoadEvent) {
                        scope.$apply(function() {
                            console.log(onLoadEvent.target)

                            var array = [];
                            var lines = onLoadEvent.target.result.split('\n');
                            for(var line = 0; line < lines.length; line++){
                                array.push(lines[line]);
                            }
                            fn(scope, {
                                $fileContent:array
                            });
                        });
                    };

                    reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
                });
            }
        };
    }
})();
