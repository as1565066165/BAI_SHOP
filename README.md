# BAI_SHOP项目

​     

项目简介：本项目采用前后端分离开发模式,vue_api_server是后端代码文件，vue_shop是前端代码文件

### vue_api_server 文件说明

- `config` 配置文件目录
  - `default.json` 默认配置文件（其中包含数据库配置，jwt 配置）
- `dao` 数据访问层，存放对数据库的增删改查操作
  - `DAO.js` 提供的公共访问数据库的方法
- `models` 存放具体数据库 ORM 模型文件
- `modules` 当前项目模块
  - `authorization.js` API 权限验证模块
  - `database.js` 数据库模块（数据库加载基于 nodejs-orm2 库加载）
  - `passport.js` 基于 passport 模块的登录搭建
  - `resextra.js` API 统一返回结果接口
- `node_modules` 项目依赖的第三方模块
- `routes` 统一路由
  - `api` 提供 api 接口
  - `mapp` 提供移动 APP 界面
  - `mweb` 提供移动 web 站点
- `services` 服务层，业务逻辑代码在这一层编写，通过不同的接口获取的数据转换成统一的前端所需要的数据
- `app.js` 主项目入口文件
- `package.json` 项目配置文件

### vue_shop 文件说明

- `dist `文件夹 项目打包后生成的文件夹（用于生产环境）
  
  - 包含 `css`、`fonts`、`img`、`js`、`favicon.ico` 和 `index.html`
  - 只需启动一个简单的服务器将项目挂载上去,运行服务器,访问默认端口
  - 怎样运行打包好的 vue 项目:https://www.cnblogs.com/zhujiabin/p/10557982.html
- `public` 文件夹 存放静态资源的文件夹
  
  - 包含 `favicon.ico` 和 `index.html` 文件
- `src` 文件夹 存放源程序的文件夹
  
  - `assets`：存放项目一些较大的资源文件，例如：图片、字体等。
  - `components`：存放项目 vue 子组件
  
  - `plugins`：项目引入的 `element-ui `组件
  - `router`：项目路由  `index.js`
  - `tools`：项目工具类  
  - `App.vue` ：vue 根组件
  - `main.js`：网页入口
- 其他配置文件
  
  - `.browserslistrc`：这个配置能够分享目标浏览器和nodejs版本在不同的前端工具,这些工具能根据目标浏览器自动来进行配置
  - `.editorconfig`：帮助开发人员在不同的编辑器和IDE之间定义和维护一致的编码样式
  - `.eslintignore`：设置不被eslint校验的文件（*ESLint* 是一个插件化并且可配置的 JavaScript 语法规则和代码风格的检查工具）
  - `.eslintrc.js`：eslint的配置文件
  - `.gitignore`：设置git忽略的文件
  - `.prettierrc`：当我们使用右键格式化的时候,就会自动帮我们补全符号,但是,有些符号在eslint中就会报语法错误,那我们需要怎么办呢?可以通过.prettierrc来进行文件配置
  - `babel.config.js`：babel配置文件（*Babel 是*一个工具链,主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法,以便能够运行在当前和旧版本的浏览器或其他环境中）


