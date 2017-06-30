/**
 * Created by Administrator on 2017/6/1.
 */
var myApp=angular.module('myApp',[]);
myApp.directive('myDirective',function () {
   return { //返回指令对象
       restrict:'E', //元素调用
       template:'<h1>模板可写自己的html页面代码</h1>',
       replace:true
   };
});