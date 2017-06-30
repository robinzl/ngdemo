var myModule = angular.module("MyModule", []);

//注射器加载完所有模块时，此方法执行一次
myModule.run(function($templateCache){ //注入模板缓存对象
    //写入一个键值对  kye=hello.html   value=模板   map对象
    $templateCache.put("hello.html","<div>Hello everyone!!!!!!</div>");
});

myModule.directive("hello", function($templateCache) {
    return {
        restrict: 'AECM',
        template: $templateCache.get("hello.html"),//从缓存对象中取模板
        replace: true
    }
});
