// 引入express框架
const express = require('express')
// 引入compression模块
const compression = require('compression')
// 创建服务器对象
const app = new express()
// 开启静态资源压缩
app.use(compression())
// 开发静态资源模块
app.use(express.static('./dist'))
// 监听端口
app.listen(3000, () => {
  console.log('服务器启动成功!请访问http://localhost:3000');
})
