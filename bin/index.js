#!/usr/bin/env node

const { program } = require('commander')

// const program = new Command();

program.version(require('../package.json').version) // 获取版本号
/**
 *  第一个参数 --first 这是一个布尔选项，不需要值。
 * -s, --separator <char>：此选项允许您指定用作分隔符的字符。
 */
// program.option("--first").option("-s, --separator <char>");

program
  .command('split') // 定义了一个名为 "split" 的子命令。
  .description('Split a string into substrings and display as an array') // 为 "split" 子命令添加描述。
  .argument('<string>', 'string to split') // 定义了一个名为 <string> 的参数，表示要拆分的字符串。
  .option('-f, --first', 'display just the first substring') // --first 是一个布尔值
  .option('-s, --separator <char>', 'separator character', ',') // 定义了一个 -s 或 --separator 选项，它允许用户指定分隔符字符，如果用户未提供分隔符，则默认为逗号 (,)
  .action((str, options) => {
    console.log('options', options)
    const limit = options.first ? 1 : undefined
    console.log(str.split(options.separator, limit))
  })

program.parse() // 调用program.parse()方法，以根据定义的选项解析命令行参数。

/* const options = program.opts();
const limit = options.first ? 1 : undefined;


console.log("args", program.args);
console.log(program.args[0]?.split(options.separator, limit)); */
