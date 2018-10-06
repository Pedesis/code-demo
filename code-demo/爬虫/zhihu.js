/*
2016/12/31

fe18

本节课主要介绍 6 个点
- 爬虫的原理(等上课讲解)
- 普通的爬虫(以豆瓣电影为例)
- 需要登录的爬虫(以知乎为例)
- 爬虫的奥秘(等上课讲解)
- 动态内容的爬取(以知乎的动态内容为例)
- 自定义模块的方法和使用方式

*/

// 这一行是套路, 给 node.js 用的
// 如果没有这一行, 就没办法使用一些 let const 这样的特性
"use strict"


const request = require('request')
const cheerio = require('cheerio')

/*
本文件需要安装两个基本的库
request 用于下载网页
cheerio 用于解析网页数据

安装命令如下
npm install request cheerio

本压缩包因为已经自带了这两个库, 所以你不用手动安装了
直接运行即可
*/

// 定义一个类来保存回答的信息
// 这里只定义了 3 个要保存的数据
// 分别是  作者 内容 链接
function Answer() {
    this.author = ''
    this.content = ''
    this.link = ''
}


const log = function() {
    console.log.apply(console, arguments)
}


const answerFromDiv = function(div) {
    // 这个函数来从一个回答 div 里面读取回答信息
    const a = new Answer()
    // 使用 cheerio.load 函数来返回一个可以查询的特殊对象
    const options = {
        decodeEntities: false,
    }
    const e = cheerio.load(div, options)
    // 然后就可以使用 querySelector 语法来获取信息了
    // .text() 获取文本信息
    a.author = e('.author-link').text()
    // 如果用 text() 则会获取不到回车
    // 这里要讲一讲爬虫的奥义
    a.content = e('.zm-editable-content').html()

    // log('***  ', a.content)
    return a
}


const answersFromBody = function(body) {
    // cheerio.load 用字符串作为参数返回一个可以查询的特殊对象
    const options = {
        decodeEntities: false,
    }
    const e = cheerio.load(body, options)
    // 查询对象的查询语法和 DOM API 中的 querySelector 一样
    const divs = e('.zm-item-answer')

    const answers = []
    for(let i = 0; i < divs.length; i++) {
        let element = divs[i]
        // 获取 div 的元素并且用 movieFromDiv 解析
        // 然后加入 movies 数组中
        const div = e(element).html()
        const m = answerFromDiv(div)
        answers.push(m)
    }
    return answers
}



const __main = function() {
    // 这是主函数
    // 知乎答案
    const url = 'https://www.zhihu.com/question/31515263'
    // request 从一个 url 下载数据并调用回调函数
    // 根据 伪装登录爬虫设置图例 替换 cookie 和 useragent 中的内容
    // 这里 useragent 我已经替换好了, 替换上你自己的 cookie 就好了
    const cookie = ''
    const useragent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36'
    const headers = {
        'Cookie': cookie,
        'User-Agent': useragent,
    }

    const options = {
        url: url,
        headers: headers,
    }
    request(options, function(error, response, body) {
        // 回调函数的三个参数分别是  错误, 响应, 响应数据
        // 检查请求是否成功, statusCode 200 是成功的代码
        if (error === null && response.statusCode == 200) {
            const answers = answersFromBody(body)

            // 引入自己写的模块文件
            const utils = require('./utils')
            const path = 'zhihu.answers.txt'
            utils.saveJSON(path, answers)
        } else {
            log('*** ERROR 请求失败 ', error)
        }
    })
}


// 程序开始的主函数
__main()
