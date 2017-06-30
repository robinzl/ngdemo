/**
 * Created by Administrator on 2017/6/1.
 */
var myApp=angular.module('myApp',[]);
myApp.directive('myCoffee',function () {
    return {
        restrict:'AE',
        scope:{},//独立作用域
        controller:function ($scope) {//定义控制器  暴露  addXXX()方法
            $scope.favor=[];
            this.addSugar=function () {
                $scope.favor.push('suga');
            };
            this.addMilk=function () {
                $scope.favor.push('milk');
            };
            this.addVodka=function () {
                $scope.favor.push('vodka');
            }
        },
        link:function (scope, element, attrs) {
            element.addClass('btn btn-default');
            element.bind('mouseenter',function () {
                console.log(scope.favor);
            })
        }
    };
});
myApp.directive('suga',function () {
    return {
        restrict:'AE',
        require:'^myCoffee',//suga指令依赖myCoffee指令  可使用myCoffee的控制器
        link:function (scope,element,attrs,myCoffeeCtrl) {
            myCoffeeCtrl.addSugar() ;//访问自定义指令暴露的接口
        }


    };
});
myApp.directive('milk',function () {
    return {
        restrict:'AE',
        require:'^myCoffee',//suga指令依赖myCoffee指令  可使用myCoffee的控制器
        link:function (scope,element,attrs,myCoffeeCtrl) {
            myCoffeeCtrl.addMilk();
        }


    };
});

myApp.directive('vodka',function () {
    return {
        restrict:'AE',
        require:'^myCoffee',//suga指令依赖myCoffee指令  可使用myCoffee的控制器
        link:function (scope,element,attrs,myCoffeeCtrl) {
            myCoffeeCtrl.addVodka();
        }


    };
});