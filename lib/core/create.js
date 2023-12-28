// lib/core/

// 引入commands
const program = require('commander')

// 定义一个函数存放create命令
const createCommands = () => {
  program.command('create <project> [others...]').description('clone a repository into a folder')
}

// 导出这个函数
module.exports = createCommands
