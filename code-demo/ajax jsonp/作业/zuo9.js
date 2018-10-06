// 2016/10/07
//
// ============
// 作业 9
//
//
// 注意, 提示在文件最末尾
// ============
//


// 定义我们的 log 函数
var log = function () {
    console.log.apply(console, arguments)
}


// ======
// 测试
// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function (condition, message) {
    // 在条件不成立的时候, 输出 message
    if (!condition) {
        log('*** 测试失败:', message)
    }
}


// 作业 1
//

/*
n 是 int
判断 n 是否是素数(质数)
*/
var primeNum = function (n) {
    if (n < 2) {
        return false;
    } else {
        for (var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
            if (n % i == 0) {
                //console.log(n,i);
                return false;
            }
        }
        return true;
    }

}
// 作业 2
//

/*
返回 100 内的素数列表
*/
var primeList = function () {
    var arr = [];
    for (var i = 2; i < 100; i++) {
        if (primeNum(i)) {
            arr.push(i);
        }
    }
    return arr;
}


// 作业 3
//

/*
给定一个英文句子 str（一个只有字母的字符串）
返回「将句中所有单词变为有且只有首字母大写的形式」的 string
*/
var toUpstr = function (str) {
    var arr = toSplit(str);
    var c = "";
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}
var toSplit = function (str) {
    var s = 0;
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            arr.push(str.slice(s, i));
            s = i + 1;
            log(s);
        }
    }
    arr.push(str.slice(s));
    return arr;
}

// 作业 4
//

// log(obj)

// for (var letterName in obj) {
//     result[i] = [`${letterName}`, obj[`${letterName}`]]
//     i++
// }
// 不用for in 的方法

var letterNum = function (str) {
    var obj = {};
    // obj[`${str[0]}`]=1;
    var arr = [];
    var result = [];
    for (var i = 0; i < str.length; i++) {
        if (!obj[`${str[i]}`]) {
            obj[`${str[i]}`] = 1;
        } else {
            obj[`${str[i]}`] = obj[`${str[i]}`] + 1;
        }
    }
    console.log(obj);
    arr = Object.keys(obj);
    for (var i = 0; i < arr.length; i++) {
        result[i] = [`${arr[i]}`, obj[`${arr[i]}`]];
    }
    log(result)
    return result;
}
letterNum("adadsdwxzcs");
/*
给定一个只包含字母的字符串，返回单个字母出现的次数
考察字典的概念和使用
返回值为包含数组的数组，格式如下（对数组中数组的顺序不做要求）

// 可以使用 Object.keys 函数
var obj = {
  foo: 1,
  bar: 2,
}
Object.keys(obj)
["foo", "bar"]

参数 "hello"
返回值 [['h', 1], ['e', 1], ['l', 2], ['o', 1]]
*/


// 作业 5
//

/*
param 是一个 object
例子如下
param 是 {
    'foo': 1,
    'bar': 'far',
}
返回如下 string, 顺序不做要求(foo bar 的顺序)
foo=1&bar=far

注意, 使用 Object.keys 函数
*/
var linkObj = function (param) {
    var arr = Object.keys(param);
    var a = "";
    for (var i = 0; i < arr.length; i++) {
        a += arr[i] + "=" + param[`${arr[i]}`] + "&";
    }
    log(a.slice(0, a.length - 1));
    return a.slice(0, a.length - 1);
}


// 作业 6
//

/*
queryString 是一个 string
例子如下
queryString 是 foo=1&bar=far
返回如下 object, 顺序不做要求(foo bar 的顺序)
{
    'foo': 1,
    'bar': 'far',
}
*/
var toSplitand = function (str,sp=" ") {
    var s = 0;
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] == sp) {
            arr.push(str.slice(s, i));
            s = i + 1;
            log(s);
        }
    }
    arr.push(str.slice(s));
    return arr;
}
var queryAnd=function(queryString){
    var o={};
var arr=toSplitand(queryString,"&");
for(var i=0;i<arr.length;i++){
    var re=toSplitand(arr[i],"=");
    o[re[0]]=re[1];
};
log(o);
}

// 作业 7
//



var ajaxGet=function(url,fn){
    var xhr=new XMLHttpRequest();
    xhr.open("get",url,true);
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status){
            fn.call(this,xhr.responseText);
        }
    }

}

/*
利用上课板书, 实现 ajaxGet 函数, 用 GET 方法请求一个 URL
url 是一个 URL
callback 是一个函数, 在接受服务器响应后调用并传递参数给它
本题不会就放弃
*/


// 作业 8
//


/*
request 是一个 object, 有如下属性
method, 请求的方法, string
url, 请求的路径, string
data, 请求发送的数据, 如果是 GET 方法则没这个值, string
callback, 响应回调, function

本题不会就放弃, 本题带了一个用法在下方
*/


var r = {
    method: 'POST',
    url: '/login',
    data: 'username=gua',
    callback: function (response) {
        console.log('响应', response)
    }
}
ajax(r)
