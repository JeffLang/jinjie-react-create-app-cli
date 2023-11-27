#!/urs/bin/env node
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

program
  .version('0.1.0')
  .command('rmdir')
  .argument('<dirs...>')
  .action(function (dirs) {
    dirs.forEach(dir => {
      console.log('rmdir %s', dir)
    })
  })

program.parse(process.argv)
