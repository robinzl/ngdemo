/**
 * Created by Administrator on 2017/6/1.
 */
var myApp=angular.module('myApp',[]);
myApp.directive('hello',function () {
   return {
       restrict:'AE',
       link:function (scope,element,attr) {
            console.log(element);
            element.bind('mouseenter',function () {
                console.log('鼠标进入自定义指令....');
            });
            element.bind('mouseout',function () {
                console.log('鼠标离开自定义指令....');
            });



       }
       
       
   }; 
});