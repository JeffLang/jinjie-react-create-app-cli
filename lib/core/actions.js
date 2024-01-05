// lib/core/actions.js

// 封装create指令的actions

// 使用promisify转换为promise写法
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
// 引入要下载的仓库
const { reactRepo } = require('../config/repo-config')
// 引入控制台美化工具
const chalk = require('chalk')

// 封装create指令的action
const createProjectAction = async (project, others) => {

  console.log(chalk.green.underline.bold('>start download repository...'))

  // 1. clone项目
  await download(reactRepo, project, { clone: true })

  // 2. 运行npm install

  // 3. 运行npm run dev
}

// 导出
module.exports = createProjectAction
