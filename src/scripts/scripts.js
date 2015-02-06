angular.module('app', ['ngAnimate'])
.controller('buttonCtrl', function($scope){
  $scope.showButtons = true;
  
  $scope.circles = [36, 72, 108, 144, 225, 270, 315];
  $scope.radius = 200;
})

.directive('circle', function(){
  return {
    restrict: 'A',
    link: function(scope, elem, attrs, ctrl){
        
      function toRadians (angle) {
        return angle * Math.PI / 180;
      }

      function getPosition(radius, angle){
        var vals = [ Math.round(radius * Math.cos(toRadians(angle))),
                      Math.round(radius * Math.sin(toRadians(angle))) ];
        return vals;  
      }

      scope.coords = getPosition(attrs.radius, attrs.circle);
      
      $(elem).css({
        'transform': 'translate('+scope.coords[0]+'%, '+scope.coords[1] + '%)'
      });
    }
  };
})

.directive('line', function(){
  return {
    restrict: 'A',
    link: function(scope, elem, attrs){
      function toRadians (angle) {
        return angle * Math.PI / 180;
      }

      function getPosition(radius, angle){
        var vals = [ Math.round(radius * Math.cos(toRadians(angle))),
                      Math.round(radius * Math.sin(toRadians(angle))) ];
        return vals;  
      }

      scope.coords = getPosition(attrs.radius, attrs.line);
      
      $(elem).css({
        'top': scope.coords[1]*-1+'%',
        'left': scope.coords[0]*-1+'%',
        'transform': 'rotate('+attrs.line+'deg)'
      });
    }
  };
});