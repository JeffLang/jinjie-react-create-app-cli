# 脚手架

## 0、前言

脚手架的只要目的是：

1. **统一开发规范**：不同的开发者可能 有不同的编码风格和开发习惯，这会导致代码风格不一致，难以维护。而使用
2. **模板和工具集成**：大公司通常有自己的项目和业务需求，可以根据自己的业务场景和需求定制化一套适用的脚手架模板和工具集成，能够大大减少开发过程的重复劳动和人为出错的可能性
3. **提高开发效率**：自己定制的脚手架可以提供一些常用的功能和组件，如路由，状态管理，UI组件库等，这些都可以减少开发者的编码时间和提高开发效率
4. **保证代码质量**：适用自己定制的脚手架可以通过内置的代码检测工具等来保证代码质量，减少出现BUG的可能性。

定制化开发自己的脚手架可以帮助公司实现前端开发的标准化，规范化，自动化，提高开发效率和代码质量，降低维护成本

## 1、项目初始化

```shell
npm init -y
```

会生成一个`package.json`文件

```json
{
  "name": "ljy-create-react-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

## 2、配置入口文件

在`package.json`同层级下创建一个`bin`文件夹，并在里面创建`node`入口文件`index.js`，编辑`index.js`文件：

```javascript
#!/usr/bin/env node
console.log('ljj')
```

第一行代码`#!/usr/bin/env node`是一个`node.js`脚本的开头，它指定了脚本应该使用的解释器，即在环境变量`$PATH`中查找`"node"`可执行文件。此行告诉操作系统这个文件应该使用`node`作为解释器来执行。该脚本可以在类Unix系统（例如Linux、macOS等）中直接运行。

例如，如果你有一个名为`index.js`的`Node.js`脚本，包含这个行，那么你可以在终端输入以下命令来运行它：

```shell
$ ./index.js
```

如果没有这行，操作系统系统无法识别他是一个`node.js`脚本，可能会尝试使用默认解释器来执行，例如Bash。这样可能导致错误，因为Bash不理解`Node.js`代码

然后再`package.json`中添加`bin`字段

```json
{
  "name": "ljj-create-react-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "bin": {
    "ljj": "bin/index.js"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "commander": "^11.1.0"
  }
}

```

## 3、npm link ——链接到全局

在文件目录下运行`npm link`将项目链接到本地，就可以临时实现`demo`指令全局调用。（`--force`参数可以强制覆盖原有指令）

```shell
npm link
```

![image-20231110171926561](README.assets/image-20231110171926561.png)

```javascript
const { program } = require("commander");

// const program = new Command();

program.version(require("../package.json").version); // 获取版本号
/**
 *  第一个参数 --first 这是一个布尔选项，不需要值。
 * -s, --separator <char>：此选项允许您指定用作分隔符的字符。
 */
// program.option("--first").option("-s, --separator <char>");

program
  .command("split") // 定义了一个名为 "split" 的子命令。
  .description("Split a string into substrings and display as an array") // 为 "split" 子命令添加描述。
  .argument("<string>", "string to split") // 定义了一个名为 <string> 的参数，表示要拆分的字符串。
  .option("-f, --first", "display just the first substring") // --first 是一个布尔值
  .option("-s, --separator <char>", "separator character", ",") // 定义了一个 -s 或 --separator 选项，它允许用户指定分隔符字符，如果用户未提供分隔符，则默认为逗号 (,)
  .action((str, options) => {
    console.log('options', options);
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });


program.parse(); // 调用program.parse()方法，以根据定义的选项解析命令行参数。

/* const options = program.opts();
const limit = options.first ? 1 : undefined;


console.log("args", program.args);
console.log(program.args[0]?.split(options.separator, limit)); */
```

然后执行`ljj`，发现命令行被执行了！并打印出了我们在入口文件中输出的代码。

## 4、commander——指令系统

### 4.1 基本指令

比如我们会通过不同的命令去做不同的事情：

- `ljj --version`
- `ljj--help`
- `ljj --create xx`
- ...

通常会使用一个第三方库：很多脚手架都是基于这个库来配置指令的，那我们先安装：

```shell
npm install commander
```

使用：

```shell
#!/usr/bin/env node

const program = require("commander");

program.version(require("../package.json").version);

// 解析用户执行时输入的参数，process.argv 是 nodejs 提供的属性
// 比如：npm run server --port 3000，后面的 --port 3000 就是用户输入的参数
program.parse(process.argv);
```

`commander`自身附带了`--help`指令，导入成功后，在命令执行`jinjie --help`，可以打印基本的帮助提示。然后我们就可以使用如下的指令了：

![image-20231110171910354](README.assets/image-20231110171910354.png)
