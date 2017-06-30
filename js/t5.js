/**
 * Created by Administrator on 2017/5/25.
 */
var myApp=angular.module('myApp',[]);
myApp.directive('hello',function () {
    return {
        restrict:'AE',//调用 属性,元素,样式类,注释
        transclude:true,//允许在指令内部嵌入内容
        template:'<div><div ng-transclude></div>hello directive</div>',//<hello>指令替换成模板  ng让hello变div
        replace:true
    }
});