const os = require('os') // 和 import 语法类似

function getSystemInfo() {
  return {
    platform: os.platform(),
    type: os.type(),
    architecture: os.arch(),
    cpuCount: os.cpus().length,
    cpuModel: os.cpus()[0].model,
    totalMemoryGB: Math.round(os.totalmem() / 1024 / 1024 / 1024),
    hostname: os.hostname(),
  }
}

const systemInfo = getSystemInfo()
console.log(systemInfo)