// lib/core/help.js

// 引入program
const program = require('commander')

// 定义helpOptions,是一个函数
const helpOptions = () => {
  // 增加自己的options(选项)
  program.option('-d --dest <dest>', 'A destination folder，例如： -d /src/home/index.js')
  program.option('-f --framework <framework>', 'Your framework，例如： React / Vue')

  // 监听指令
  program.on('--help', function () {
    console.log('help')
  })
}

// 导出
module.exports = helpOptions
