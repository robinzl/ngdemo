/**
 * Created by Administrator on 2017/6/1.
 */
var myApp=angular.module('myApp',[]);
myApp.directive('hello',function () {
    return {
        restrict:'AE',
        compile:function (ele, attrs) {
            return {
                pre:function (scope,elm,iAttrs) {
                    console.log('pre compile...');
                },
                post:function (scope,elm,iAttrs) {
                    console.log('post compile...');
                } //替代link函数

            }
        },
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