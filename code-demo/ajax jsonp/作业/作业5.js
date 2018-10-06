// 2016/09/25
//
// ============
// 作业 5
// string 的花式操作函数
//
// 用到的知识主要是
// 0, 用下标引用字符串
// 1, 字符串切片
// 2, 循环
// 3, 选择 (也就是 if)
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
//
// 请直接在我的代码中更改/添加, 不要新建别的文件


// 定义我们的 log 函数
var log = function () {
    console.log.apply(console, arguments)
}
var ensure = function (condition, message) {
    // 在条件不成立的时候, 输出 message
    if (!condition) {
        log('*** 测试失败:', message)
    }
}

// ======
// 测试
// 本次作业起, 我们开始使用自动测试的方法来验证结果
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

// 例子
// 测试的使用
//
// 注意看, 我们使用了上文定义的 ensure 来进行测试
var log = function () {
    console.log.apply(console, arguments)
}
var ensure = function (condition, message) {
    // 在条件不成立的时候, 输出 message
    if (!condition) {
        log('*** 测试失败:', message)
    }
}
var test_sample = function () {
    // ensure 函数接受两个参数
    // 第一个是一个 bool 值, 如果为 True 则不会有任何反应
    // 否则会打印第二个参数
    ensure(1 === 1, '如果测试失败, 这句话会被打印出来')
    ensure(1 > 2, '测试 1 > 2 失败')
}
test_sample()
// 调用上面的 test_sample 可以得到如下输出
// *** 测试失败: 测试 1 > 2 失败


// ======
// 资料
// ======
//
// String 函数可以把数字转成字符串
// 例如 String(1) 就能得到 '1'
// 注意, String 是大写开头的函数, 不要弄错大小写
//


// 作业 1
// 10 分钟做不出就看提示
//

/*
n 是 int 类型
width 是 int 类型

把 n 的位数变成 width 这么长，并在右对齐，不足部分用 0 补足并返回
具体请看测试, 注意, 返回的是 string 类型

返回 string 类型
*/
var zfill = function (n, width) {
    var s = String(n);
    var x = s.length;
    var ox = width - x;
    var res = [];
    if (ox > 0) {
        for (var i = 0; i < ox; i++) {
            res = res + "0";
        }
        s = res + s;
        log(res, s);

    }
    return s;

}

var log = function () {
    console.log.apply(console, arguments)
}
var ensure = function (condition, message) {
    // 在条件不成立的时候, 输出 message
    if (!condition) {
        log('*** 测试失败:', message)
    }
}
// 测试函数
var test_zfill = function () {
    ensure(zfill(1, 4) === '0001', 'zfill 测试 1')
    ensure(zfill(23, 4) === '0023', 'zfill 测试 2')
    ensure(zfill(12345, 4) === '12345', 'zfill 测试 3')
    ensure(zfill(169, 5) === '00169', 'zfill 测试 4')
}

// 调用测试函数
test_zfill()








// 作业 2
// 10 分钟做不出就看提示
//
// 注意, 这是一个新的知识点, 叫 默认参数
// fillchar 这个参数如果你不提供, 它的值默认就是 ' '
// 语法就是这样

/*
s 是 string
width 是 int
fillchar 是 长度为 1 的字符串, 默认为空格 ' '

如果 s 长度小于 width, 则在末尾用 fillchar 填充并返回
否则, 原样返回, 不做额外处理

返回 string 类型


*/
// 测试函数
var ljust = function (s, width, fillchar = " ") {
    var n = String(s);
    var nl = n.length;
    var ox = width - nl;
    var res = [];
    if (nl > 0) {
        for (var i = 0; i < ox; i++) {
            res = res + fillchar;
        }
        log(res);
        s = s + res;
    }
    return s;
}
var log = function () {
    console.log.apply(console, arguments)
}
var ensure = function (condition, message) {
    //在条件不成立的时候, 输出 message
    if (!condition) {
        log('*** 测试失败:', message)
    }
}
var test_ljust = function () {
    ensure(ljust('gua', 5) === 'gua  ', 'ljust 测试 1')
    ensure(ljust('guagua', 5) === 'guagua', 'ljust 测试 2')
    ensure(ljust('gua', 5, '*') === 'gua**', 'ljust 测试 3')
}
test_ljust()




// 作业 3
// 10 分钟做不出就看提示
//

/*
s 是 string
width 是 int
fillchar 是 长度为 1 的字符串, 默认为空格 ' '

如果 s 长度小于 width, 则在开头用 fillchar 填充并返回

返回 string 类型
*/


// 测试函数

var log = function () {
    console.log.apply(console, arguments)
}
var ensure = function (condition, message) {
    // 在条件不成立的时候, 输出 message
    if (!condition) {
        log('*** 测试失败:', message)
    }
}
var test_rjust = function () {
    ensure(rjust('gua', 5) === '  gua', 'rjust 测试 1')
    ensure(rjust('guagua', 5) === 'guagua', 'rjust 测试 2')
    ensure(rjust('gua', 5, '*') === '**gua', 'rjust 测试 3')
}
test_rjust()




// 作业 4
// 10 分钟做不出就看提示
//

/*
s 是 string
width 是 int
fillchar 是 长度为 1 的字符串, 默认为空格 ' '

如果 s 长度小于 width, 则在两边用 fillchar 填充并返回
如果 s.length 和 width 互为奇偶, 则无法平均分配两边的 fillchar
这种情况下, 让左边的 fillchar 数量小于右边

返回 string 类型
*/

// 测试函数

var log = function () {
    console.log.apply(console, arguments)
}
var ensure = function (condition, message) {
    // 在条件不成立的时候, 输出 message
    if (!condition) {
        log('*** 测试失败:', message)
    }
}
var test_center = function () {
    ensure(center('gua', 5) === ' gua ', 'center 测试 1')
    ensure(center('gua', 5, '*') === '*gua*', 'center 测试 2')
    ensure(center('gw', 5) === ' gw  ', 'center 测试 3')
    ensure(center('gua', 6) === ' gua  ', 'center 测试 4')
}
test_center()


// 作业 5
// 10 分钟做不出就看提示
// 注意, 看上面的资料, 介绍了一个 includes 函数
//

/*
s 是 string
检查 s 中是否只包含空格

返回 bool, 如果 s 中包含的只有空格则返回 true, 否则返回 false
*/
var is_space = function (s) {
    var a = String(s[0])
    var bo = a.includes(" ")
    for (var i = 1; i < s.length; i++) {
        if (bo) {
            bo = s[i].includes(" ")
            log(s[i], bo)
        }
    }
    return (bo)
}

// var is_space=function(s){
//     var n=0;
//     for(var i=0;i<s.length;i++){

//         if(s[i]===" "){
//             n++;
//         }
//     }
//     if(n==s.length){
//         return true;
//     }else{
//         return false;
//     }
// }
// 测试函数
var log = function () {
    console.log.apply(console, arguments)
}
var ensure = function (condition, message) {
    // 在条件不成立的时候, 输出 message
    if (!condition) {
        log('*** 测试失败:', message)
    }
}
var test_is_space = function () {
    ensure(is_space(' '), 'center 测试 1')
    ensure(is_space('   '), 'center 测试 2')
    ensure(!is_space(''), 'center 测试 3')
    ensure(!is_space('gua '), 'center 测试 4')
}
test_is_space()


// 作业 6
// 10 分钟做不出就看提示
//

/*
s 是字符串
检查 s 中是否只包含数字
返回: bool, 如果 s 中包含的只有数字则返回 true, 否则返回 false
*/


// 测试函数
var is_digit = function (s) {
    var n = String(s);
    var bo = true;
    for (var j = 0; j < n.length; j++) {
        if (bo) {
            for (var i = 0; i < 10; i++) {

                bo = n[j].includes(i);
                if (bo) { break };
            }
        }

    }
    return bo;
}
var log = function () {
    console.log.apply(console, arguments)
}
var ensure = function (condition, message) {
    // 在条件不成立的时候, 输出 message
    if (!condition) {
        log('*** 测试失败:', message)
    }
}
var test_is_digit = function () {
    ensure(is_digit('123'), 'is_digit 测试 1')
    ensure(is_digit('0'), 'is_digit 测试 2')
    ensure(!is_digit('  '), 'is_digit 测试 3')
    ensure(!is_digit('1.1'), 'is_digit 测试 4')
    ensure(!is_digit('gua'), 'is_digit 测试 5')
}
test_is_digit()


// 作业 7
// 10 分钟做不出就看提示
//

/*
s 是 string
返回一个「删除了字符串开始的所有空格」的字符串

返回 string
*/

// 测试函数
var strip_left = function (s) {
    var num = s.length;
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== " ") {
            num = i;
            break;
        }
    }

    var str = s.slice(num);
    log(s);
    return str;
}
var log = function () {
    console.log.apply(console, arguments)
}
var ensure = function (condition, message) {
    // 在条件不成立的时候, 输出 message
    if (!condition) {
        log('*** 测试失败:', message)
    }
}
var test_strip_left = function () {
    ensure(strip_left('  gua') === 'gua', 'strip_left 测试 1')
    ensure(strip_left(' gua  ') === 'gua  ', 'strip_left 测试 2')
    ensure(strip_left('') === '', 'strip_left 测试 3')
    ensure(strip_left('    ') === '', 'strip_left 测试 4')
}
test_strip_left()

// 作业 8
// 10 分钟做不出就看提示
//

/*
s 是 string
返回一个「删除了字符串末尾的所有空格」的字符串

返回 string
*/

// 测试函数
var strip_right = function (s) {
    var num = 0;
    for (var i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            num = i+1;
            break;
        }
    }
    s = s.slice(0, num);
    log(s);
    return s;
}
var log = function () {
    console.log.apply(console, arguments)
}
var ensure = function (condition, message) {
    // 在条件不成立的时候, 输出 message
    if (!condition) {
        log('*** 测试失败:', message)
    }
}
var test_strip_right = function () {
    ensure(strip_right('  gua') === '  gua', 'strip_right 测试 1')
    ensure(strip_right(' gua  ') === ' gua', 'strip_right 测试 2')
    ensure(strip_right('') === '', 'strip_right 测试 3')
    ensure(strip_right('    ') === '', 'strip_right 测试 4')
}
test_strip_right()

// 作业 9
// 10 分钟做不出就看提示
//

/*
s 是 string
返回一个「删除了字符串首尾的所有空格」的字符串

返回 string
*/

var strip=function(s){
        var x=strip_left(s);
        var y=strip_right(x);
        return y;
}
// 测试函数
var log = function () {
    console.log.apply(console, arguments)
}
var ensure = function (condition, message) {
    // 在条件不成立的时候, 输出 message
    if (!condition) {
        log('*** 测试失败:', message)
    }
}
var test_strip = function () {
    ensure(strip('  gua') === 'gua', 'strip 测试 1')
    ensure(strip(' gua  ') === 'gua', 'strip 测试 2')
    ensure(strip('') === '', 'strip 测试 3')
    ensure(strip('    ') === '', 'strip 测试 4')
}
test_strip()

// 作业 10
// 10 分钟做不出就看提示
//

/*
3 个参数 s old new 都是字符串
返回一个「将 s 中的 old 字符串替换为 new 字符串」的字符串
假设 old 存在并且只出现一次

返回 string
*/
var replace=function(s,old,ne){
    var num=0;
    var ol=old.length;
    var t=s.includes(old)
    if(t){
        for(var i=0;i<s.length;i++){
            if(s[i]===old[0]){
                num=i;
                break;
            }
        }
        var sl=s.slice(0,num);
        var sr=s.slice(num+ol)
        var str=sl+ne+sr;
        log(str);
        return str;
    }else{
        return s;
    }
   
}

// 测试函数
var log = function () {
    console.log.apply(console, arguments)
}
var ensure = function (condition, message) {
    // 在条件不成立的时候, 输出 message
    if (!condition) {
        log('*** 测试失败:', message)
    }
}
var test_replace = function () {
    ensure(replace('hello, world', 'world', 'gua') === 'hello, gua', 'replace 测试 1')
    ensure(replace('hello', 'world', 'gua') === 'hello', 'replace 测试 2')
    ensure(replace('hello', 'll', 'gua') === 'heguao', 'replace 测试 3')
}
test_replace()

/*
--------
提示
--------

zfill
1, 先把 n 转成 string 类型, 这样就可以求出长度
2, 有长度就可以和 width 参数比较, 看看需要补几个 0
3, 然后就可以得到一个包含几个 0 的字符串
4, 拼接两个字符串, 就得到了结果, 返回, 成功


ljust
1, 用 s 的长度和 width 算出需要填充的 fillchar 个数
2, 得到要填充的字符串
3, 拼接, 返回, 成功


rjust
同上


center
1, 算出两边要填充的个数
2, 得到两边的字符串
3, 拼接, 返回
*/
//第十题
