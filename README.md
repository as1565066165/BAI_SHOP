# BAI_SHOP 项目

## 一、项目简介

项目简介：本项目采用前后端分离开发模式,vue_api_server 是后端代码文件，vue_shop 是前端开发代码文件，vue_shop_server 是前端生产代码文件，相比起来直接运行 vue_shop_server 会比 vue_shop 轻松很多

| 前端项目技术栈 | 说明                                                                                                                    |
| -------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Vue            | 一套构建用户界面的渐进式框架                                                                                            |
| Vue-router     | *vue-router 是*vue.js 官方路由管理器                                                                                    |
| Element-UI     | _ElementUI_ _Element_,一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库,提供了配套设计资源,帮助你的网站快速成型 |
| Axios          | axios 是一个基于 Promise 的 Http 库，可以用在 node.js 环境和浏览器中                                                    |
| Echarts        | *ECharts*简单来说是互联网开发程序过程中,后台数据库用以实现数据到图形的映射的一个插件                                    |

| 后端项目技术栈 | 说明                                                                                                                                                                                                                                        |
| :------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Node.js        | nodejs 他是用 C++开发的一种运行于服务器端的语言,可以写网站后台程序,可以做服务端应用开发                                                                                                                                                     |
| Express        | *Express 是*一个基于 Node.js 平台的极简、灵活的 web 应用开发框架,它提供一系列强大的特性,帮助你创建各种 Web 和移动设备应用                                                                                                                   |
| Jwt            | json web token 是为了在网络应用环境中传递声明而执行的一种基于 json 的开放标准                                                                                                                                                               |
| Mysql          | 数据库                                                                                                                                                                                                                                      |
| Sequelize      | Sequelize.js 提供对 MySQL，MariaDB，SQLite 和 PostgreSQL 数据库的简单访问，通过映射数据库条目到对象，或者对象到数据库条目。简而言之，就是 ORM（Object-Relational-Mapper）。Sequelize.js 完全是使用 JavaScript 编写，适用于 Node.js 的环境。 |

## 二、文件说明

### 1.vue_api_server 文件说明

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

### 2.vue_shop 文件说明

- `dist`文件夹 项目打包后生成的文件夹（用于生产环境）

  - 包含 `css`、`fonts`、`img`、`js`、`favicon.ico` 和 `index.html`
  - 只需启动一个简单的服务器将项目挂载上去,运行服务器,访问默认端口
  - 怎样运行打包好的 vue 项目:https://www.cnblogs.com/zhujiabin/p/10557982.html

- `public` 文件夹 存放静态资源的文件夹
  - 包含 `favicon.ico` 和 `index.html` 文件
- `src` 文件夹 存放源程序的文件夹

  - `assets`：存放项目一些较大的资源文件，例如：图片、字体等。
  - `components`：存放项目 vue 子组件

  - `plugins`：项目引入的 `element-ui`组件
  - `router`：项目路由 `index.js`
  - `tools`：项目工具类
  - `App.vue` ：vue 根组件
  - `main.js`：网页入口

- 其他配置文件

  - `.browserslistrc`：这个配置能够分享目标浏览器和 nodejs 版本在不同的前端工具,这些工具能根据目标浏览器自动来进行配置
  - `.editorconfig`：帮助开发人员在不同的编辑器和 IDE 之间定义和维护一致的编码样式
  - `.eslintignore`：设置不被 eslint 校验的文件（_ESLint_ 是一个插件化并且可配置的 JavaScript 语法规则和代码风格的检查工具）
  - `.eslintrc.js`：eslint 的配置文件
  - `.gitignore`：设置 git 忽略的文件
  - `.prettierrc`：当我们使用右键格式化的时候,就会自动帮我们补全符号,但是,有些符号在 eslint 中就会报语法错误,那我们需要怎么办呢?可以通过.prettierrc 来进行文件配置
  - `babel.config.js`：babel 配置文件（*Babel 是*一个工具链,主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法,以便能够运行在当前和旧版本的浏览器或其他环境中）

### 3.vue_shop_server 文件说明

- `dist` 文件夹 `vue_shop` 打包的生产环境项目文件
- 包含 `css`、`fonts`、`img`、`js`、`favicon.ico` 和 `index.html`
  - 运行项目时首先删除 `node_modules` 依赖包，然后在进入`vue_shop_server`目录，执行`npm install`重新下载新的依赖包
  - 依赖包下载完成之后，在 doc 窗口执行命令`nodemon app.js` 并访问http://localhost:3000就能看到项目的前端页面了
- `app.js`文件 服务器运行入口文件，里面包含一些对服务器的基本配置

## 三、项目运行注意事项

1.下载并解压 `BAI_SHOP.zip`

2.进入 `vue_api_server/db` 文件夹,将 db 文件夹下的 `mydb.sql` 数据库文件导入到 mysql 数据库中

3.数据导入成功后,打开 `config` 文件夹中的 `default.json` 文件配置其中的 `db_config`

4.打开 doc 命令窗口,进入 `vue_api_server` 目录,运行 `npm install` 命令加载项目所需的依赖

5.依赖加载完毕之后执行 `nodemon app.js` 运行

6.打开一个新的 doc 命令窗口,进入 vue_shop 目录,运行 `npm install` 命令加载项目所需的依赖

7.依赖加载完毕之后, 在当前窗口运行 `npm run serve` 命令运行项目,当提示 `Compiled successfully in xxxxms` ,打开浏览器访问 `localhost:8080`

8.后记：一般来说开发模式的项目就运行成功啦！注意：先要有 nodejs 环境哦！而且要全局安装 nodemon 依赖 代码：`npm install nodemon -g`

如果想挂载生产模式的项目，请看上面的**vue_shop 文件说明和 vue_shop_server 文件说明**， dist 文件夹就是 vue 项目打包之后的文件，只需将它挂载到服务器上即可。
