#! /usr/bin/env node

// bin/index.js

const program = require('commander')

// 查看版本号
program.version(require('../package.json').version)

// 帮助和可选信息
const helpOptions = require('../lib/core/help')
// create
const createCommands = require('../lib/core/create')

// 帮助和可选信息
helpOptions()
// create
createCommands()

program.parse(process.argv)
