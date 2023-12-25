#! /usr/bin/env node

const program = require('commander')

// 查看版本号
program.version(require('../package.json').version)

const helpOptions = require('../lib/core/help')

// 帮助和可选信息
helpOptions()

/* program
  .version('0.1.0')
  .argument('<username>', 'user to login')
  .argument('[password]', 'password for user, if required', 'no password given')
  .action((username, password) => {
    console.log('username:', username)
    console.log('password:', password)
  }) */

/* program
  .version('0.1.0')
  .command('rmdir')
  .arguments('<username> <password>')
  .argument('<dirs...>')
  .action(function (a, b, c) {
    console.log('dirs:', a, b, c)
  }) */
/* 
program
  .addArgument(new program.Argument('<drink-size>', 'drink cup size').choices(['small', 'medium', 'large']))
  .addArgument(new program.Argument('[timeout]', 'timeout in seconds').default(60, 'one minute'))
  .action(args => console.log('args', args))

// 获取已解析的参数
const drinkSize = program.processedArgs['drink-size']
console.log('drinkSize', drinkSize) */

// 处理函数
/* program
  .argument('<name>')
  .option('-t, --title <honorific>', 'title to use before name')
  .option('-d, --debug', 'display some debugging')
  .action((name, options, command) => {
    if (options.debug) {
      console.error('Called %s with options %o', command.name(), options)
    }
    const title = options.title ? `${options.title} ` : ''
    console.log(`Thank-you ${title}${name}`)
  }) */

/* 
  program
  .command('serve')
  .argument('<script>')
  .option('-p, --port <number>', 'port number', 80)
  .action(function() {
    console.error('Run script %s on port %s', this.args[0], this.opts().port);
  });

  */

// 处理函数支持async，相应的，需要使用.parseAsync代替.parse。
/* async function run() {
  // 在这里编写代码
  const res = await new Promise(resolve => {
    setTimeout(() => {
      return resolve('OK')
    }, 1000)
  })
  console.log('res', res)
}

async function main() {
  program.command('run').action(run)
  await program.parseAsync(process.argv)
}

main() */

// 生命周期钩子
program.option('-t, --trace', 'display trace statements for commands').hook('preAction', (thisCommand, actionCommand) => {
  if (thisCommand.opts().trace) {
    console.log(`About to call action handler for subcommand: ${actionCommand.name()}`)
    console.log('arguments: %O', actionCommand.args)
    console.log('options: %o', actionCommand.opts())
  }
})

// program.parse(process.argv)
