// lib/core/actions.js

// 封装create指令的actions

// 使用promisify转换为promise写法
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))

// 引入要下载的仓库
const { reactRepo } = require('../config/repo-config')
const { spawnCommand } = require('../utils/terminal')

// 引入控制台美化工具
const chalk = require('chalk')

// 使用ora实现loading效果
const ora = require('ora')

// ASCII 的艺术字
var figlet = require('figlet')

// 定义一个loading
const gitRepoSpinner = ora('Downloading github repo, please wait a while...')

// 封装create指令的action project是克隆的项目 others clone project后面的参数
const createProjectAction = async (project, others) => {
  // ASCII艺术字
  console.log(
    '\r\n' +
      figlet.textSync('JINJIE-CLI', {
        font: 'Big',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true,
      }) +
      '\r\n',
  )

  console.log(chalk.green.underline.bold('>start download repository...'))

  // loading开始
  gitRepoSpinner.start()
  // 1. clone项目
  await download(reactRepo, project, { clone: true })
  // loading结束
  gitRepoSpinner.succeed()

  // 2. 运行npm install
  // 判断平台 w32为windows平台 window 执行 npm 命令实际执行的 npm.cmd
  const command = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'
  await spawnCommand(command, ['install'], { cwd: `./${project}` })

  // 3，运行npm run dev
  await spawnCommand(command, ['start'], { cwd: `./${project}` })
}

// 导出
module.exports = createProjectAction
