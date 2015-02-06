angular.module('app', ['ngAnimate'])
.controller('buttonCtrl', function($scope){
  $scope.showButtons = false;
  
  $scope.circles = [36, 72, 108, 144, 225, 270, 315];
})

.directive('circle', function(){
  return {
    restrict: 'A',
    link: function(scope, elem, attrs, ctrl){
        
      function toRadians (angle) {
        return (angle * Math.PI) / Math.PI / 360;
      }

      function getPosition(radius, angle){
        console.log(angle);
        var vals = [ Math.round(radius * Math.cos(2 * Math.PI * toRadians(angle))),
                      Math.round(radius * Math.sin(2 * Math.PI * toRadians(angle))) ];
        console.log(vals);
        return vals;  
      }

      scope.coords = getPosition(200, attrs.circle);
      
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
        return (angle * Math.PI) / Math.PI / 360;
      }

      function getPosition(radius, angle){
        console.log(angle);
        var vals = [ Math.round(radius * Math.cos(2 * Math.PI * toRadians(angle))),
                      Math.round(radius * Math.sin(2 * Math.PI * toRadians(angle))) ];
        console.log(vals);
        return vals;  
      }

      scope.coords = getPosition(200, attrs.line);
      
      $(elem).css({
        'top': scope.coords[1]*-1+'%',
        'left': scope.coords[0]*-1+'%',
        'transform': 'rotate('+attrs.line+'deg)'
      });
    }
  };
});