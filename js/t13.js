/**
 * Created by Administrator on 2017/6/1.
 */
var myModule=angular.module('MyModule',[]);
myModule.controller('MyCtrl',function ($scope) {
    $scope.ctrlFlavor="青岛啤酒";
   // $scope.flavor="青岛啤酒2";

})
myModule.directive('drink',function () {
   return {
       restrict:'AE',
       template:'<div>{{flavor}}</div>', //flavor是自定义指令scope.flavor
       scope:{
           flavor:'@'
       }
       // link:function (scope,element,attrs) {
       //     scope.flavor=attrs.flavor;//attrs.flavor 自定义指令放在上下环境下
       // }

   };
});