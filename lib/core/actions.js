// lib/core/actions.js

// 封装create指令的action
const createProjectAction = (project, others) => {
  console.log('project', project)
  console.log('others', others)
}

// 导出
module.exports = createProjectAction
