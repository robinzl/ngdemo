var myApp=angular.module('myApp',[]);
myApp.directive('myDirective',function () {
    return { //返回指令对象
        restrict:'E', //元素调用
        templateUrl:'template.html',
        replace:false //不保留指令名
    };
});