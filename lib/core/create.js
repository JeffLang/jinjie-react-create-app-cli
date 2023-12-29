// lib/core/actions

// 引入commands
const program = require('commander')
const createProjectAction = require('./actions')

// 定义一个函数存放create命令
const createCommands = () => {
  program
    .command('create <project> [others...]')
    .description('clone a repository into a folder')
    .description('clone a repository into a folder')
    // createProjectAction
    .action(createProjectAction)
}

// 导出这个函数
module.exports = createCommands
