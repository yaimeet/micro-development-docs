# 快速开始

::: warning 抱歉
非常抱歉的告诉您，由于 `微开发` 涉及东西不算少，而且需要注意的地方也不少，加上网上也没有看到过类似的方式，所以文档理论概念篇较多，还请您耐心按照下面的步骤阅读完整个文档，以加深理解。
:::

## 第一步

::: danger 必须
请务必阅读概念篇。[概念](/concept)
:::

通过本篇，可以提前了解一下 `微开发` 中涉及了大概哪些方面，可以了解  `微开发` 是什么？自己的需求和场景是否符合 `微开发` ？以及  `微开发` 模式实现的机制是什么，有助于后续使用 该模式 时解决一些问题 。


## 第二步


::: danger 必须
请务必仔细阅读理解脚手架，该篇文档，同时也详细的补充了脚手架内部在执行了什么。[脚手架](/cli)
:::

脚手架，其实就是把一些复杂或重复的操作，简化，其内部还是通过日常操作，所以当完全理解上面的文档时，脚手架将会变得很容易理解和操作。

## 开始

假设你已经完全看完上面的文档，下面将直接进入主题了。

首先，关于  `微开发` 的项目都在 [微开发-GitHub](https://github.com/micro-development) 这里，下面对仓库简单说明一下：


- [官方文档-本站，micro-development-docs](https://github.com/micro-development/micro-development-docs)
- [shell版-脚手架，micro-development-sh , 已弃用](https://github.com/micro-development/micro-development-sh)
- [node版本-脚手架，micro-development-cli](https://github.com/micro-development/micro-development-cli)



### Sapmle-Demo

::: tip 简单示例
下面几个仓库，是简单的演示了一下 如何使用 git仓库 作为依赖的案例。
:::

- [示例，公共js - sample-js](https://github.com/micro-development/sample-js)
- [示例，公共css - sample-css](https://github.com/micro-development/sample-css)
- [示例，页面 - sample-html](https://github.com/micro-development/sample-html)

**这个 demo 纯粹的演示了，以 git仓库 作为依赖 的管理和使用方式，具体详情点击上方连接查看。**

### Demo-VueAdmin

::: tip 简单示例
下面是基于 `Vue` 版本的 后台管理 `demo` 。
:::

- [公共模块，系统初始化入口 - vue-admin-common](https://github.com/micro-development/vue-admin-common)
- [基础模块，账户中心 - vue-admin-basic](https://github.com/micro-development/vue-admin-basic)
- [功能模块，写作功能 - vue-admin-write](https://github.com/micro-development/vue-admin-write)
- [功能模块，devops - vue-admin-devops](https://github.com/micro-development/vue-admin-devops)
- [所有模块，完整系统 - vue-admin-web](https://github.com/micro-development/vue-admin-web)

::: tip 注意
上面的模块名，只是一个名称而已，举例子哈，不是真正的功能。
:::

简单描述一下这个 `vue-admin` 系统分解后的一个效果：

正常情况，这个系统，应该只有一个仓库：vue-admin ，我们现在分为了 5 个仓库。

- **公共模块，系统初始化入口**：正常启动Vue的配置，初始化流程，以及各种公共资源，插件，过滤器，指令，配置等，逻辑层包含：公用的登录注册首页，系统的全局布局，都在这个最基础的仓库。
- **基础模块，账户中心**：账户中心模块，这里面仅仅只有 账户中心的路由配置和视图，依赖 `公共模块` 注入完成。
- **功能模块，写作功能**：写作模块，这里面仅仅只有 写作模块的路由配置和视图，依赖 `公共模块` 和 `账户中心模块` 注入完成。
- **功能模块，devops**：devops模块，这里面仅仅只有 devops的路由配置和视图，依赖 `公共模块` 和 `账户中心模块` 注入完成。
- **所有模块，完整系统**：所有模块的集合，注入所有的模块进来，组合成一个完整的系统。
  
::: tip 依赖注入
这个依赖注入和 IOC 可不是一个东西哦，在这里，只是一个形容词，具体实现请看下一章。
:::

#### 1. 公共模块，系统初始化入口

::: tip 提示
除了公用的一堆东西之外；逻辑部分只包含：登录注册首页。
:::

[公共模块-GitHub](https://github.com/micro-development/vue-admin-common)

该模块是系统中最核心的了，属于基础底座，这里面实现的东西要保持稳定。

通过看项目结构，可以看出，和日常 Vue 项目并没有什么区别，只是多了一些东西，增加了一些规范。

- [/src/register.js](https://github.com/micro-development/vue-admin-common/blob/master/src/register.js) , 注册挂载 Vue 相关所有的东西，在以往的写法中，这些代码通常会写到 `src/main.js` , 在这里我们抽出来，单独作为  注册挂载 的入口；后续其他模块启动时，将也会直接依赖这个入口。
- [/src/output.js](https://github.com/micro-development/vue-admin-common/blob/master/src/output.js) , 导出一些东西给其他模块用。
- [/webpack.js](https://github.com/micro-development/vue-admin-common/blob/master/webpack.js) , webpack 公用配置。
  
项目启动顺序是这样的：

![公共模块项目启动顺序](https://assets.processon.com/chart_image/5f1bd961e0b34d54dac9f385.png)



#### 2. 基础模块，账户中心

::: tip 依赖
依赖公共模块；当前仓库只有账户中心的几个页面。
:::

[公共模块-GitHub](https://github.com/micro-development/vue-admin-basic)

项目启动顺序：

![基础模块启动顺序](https://assets.processon.com/chart_image/5f1be652637689168e339a77.png)



#### 3. 功能模块，写作模块

::: tip 依赖
依赖公共模块和基础模块；当前仓库依然只有自己的页面。
:::

[写作模块-GitHub](https://github.com/micro-development/vue-admin-write)

项目启动顺序：

![功能模块启动顺序](https://assets.processon.com/chart_image/5f1be9340791291b99664fad.png)

::: tip 重点
通过这几张图，可以很清晰的看出，所有公共的操作，都内置到了 `公共模块` , 业务功能模块，直接调用。

业务功能模块，导出的核心就是 `路由和视图` 的组合 。
:::

#### 其他模块

devops 和 web，都是一样的方式。

