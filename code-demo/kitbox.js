//console.log封装
var log=function(){
    console.log.apply(console,arguments);
}
//queryseletor封装
var findElement=function(element){
    return document.querySelector(element)
}
//queryseletorAll封装
var findElements=function(elements){
    return document.querySelectorAll(element);
}
//append添加html元素用
/*
html=`<div>
<span>${x}</span>
</div>
`
*/
var appendHtml=function(element,html){
    element.insertAdjacentHTML('before',html);
}
/*绑定单个元素的事件*/ 
var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}
/**绑定所有元素事件 */
var bindAll = function(selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for(var i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}
//添加||删除class
var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

var removeClassAll = function(className) {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.classList.remove(className)
    }
}














//ajax封装
var ajax = function(method, path, data, reseponseCallback) {
    var r = new XMLHttpRequest()
    // 设置请求方法和请求地址
    r.open(method, path, true)
    // 设置发送的数据的格式
    r.setRequestHeader('Content-Type', 'application/json')
    // 注册响应函数
    r.onreadystatechange = function() {
        if(r.readyState === 4) {
            reseponseCallback(r)
        }
    }
    // 发送请求
    r.send(data)
}