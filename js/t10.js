/**
 * Created by Administrator on 2017/6/1.
 */
/**
 * Created by Administrator on 2017/6/1.
 */
var myApp=angular.module('myApp',[]);

myApp.controller('MyCtrl1',function ($scope) {
    $scope.test1=function () {
        console.log('鼠标进入访问控制器1函数....')
    };

});

myApp.controller('MyCtrl2',function ($scope) {
    $scope.test2=function () {
        console.log('鼠标进入访问控制器2函数....')
    };

});

myApp.directive('hello',function () {
    return {
        restrict:'AE',

        link:function (scope,element,attrs) {//指令所拥有的scope对象
            console.log(element);
            element.bind('mouseenter',function () {
                //console.log(attrs.calltest);//属性名必须全部小写
                scope.$apply(attrs.calltest);//scope.calltest()

            });

        }
    };
});