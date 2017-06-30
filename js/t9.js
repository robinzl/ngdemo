/**
 * Created by Administrator on 2017/6/1.
 */
var myApp=angular.module('myApp',[]);

myApp.controller('MyCtrl',function ($scope) {
    $scope.test=function () {
        console.log('鼠标进入访问控制器函数....')
    };
    $scope.xxx='监听鼠标滑动';
});


myApp.directive('hello',function () {
    return {
        restrict:'AE',
        template:'<div>{{xxx}}</div>',
        link:function (scope,element,attr) {//指令所拥有的scope对象
            console.log(element);
            element.bind('mouseenter',function () {
                scope.test();
            });
            scope.xxx='指令改写了父指令的scope的内容';
        }

    };
});