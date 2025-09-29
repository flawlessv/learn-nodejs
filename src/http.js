const http = require('http')

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  // 设置响应头为 JSON 格式
  res.setHeader('Content-Type', 'application/json')

  // 创建要返回的 JSON 数据
  const response = {
    message: 'Hello World!',
    time: new Date().toLocaleString(),
    status: 'success',
  }

  // 返回 JSON 响应
  res.end(JSON.stringify(response, null, 2))
})

// 监听 300 端口
server.listen(3000, () => {
  console.log('HTTP 服务器已启动，监听端口: 3000')
  console.log('访问地址: http://localhost:3000')
})
