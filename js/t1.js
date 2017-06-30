/**
 * Created by Administrator on 2017/5/25.
 */
var myApp=angular.module('myApp',[]);
myApp.directive('hello',function () {
    return {
        restrict:'AECM',//调用 属性,元素,样式类,注释
        template:'<div>哈哈,我也可以做自己的指令了</div>',//<hello>指令替换成模板  ng让hello变div
        replace:true
    }
});