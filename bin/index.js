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

async function run() {
  /* 在这里编写代码 */
}

async function main() {
  program.command('run').action(run)
  await program.parseAsync(process.argv)
}

program.parse(process.argv)
