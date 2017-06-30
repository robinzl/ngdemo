/**
 * Created by Administrator on 2017/6/1.
 */
var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
        restrict: 'AE',
        scope:{},
        //定义模板  双向绑定
        template: '<div><input type="text" ng-model="userName"/>{{userName}}</div>',
        replace: true
    }
});