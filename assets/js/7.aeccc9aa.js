(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{354:function(v,_,t){"use strict";t.r(_);var a=t(42),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[v._v("#")]),v._v(" 概念")]),v._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[v._v("须知，术语定义")]),v._v(" "),t("p",[v._v("由于本篇中涉及了其他知识点和一些概念，下对一些词做一个预定义解释，方便快速理解。")])]),v._v(" "),t("ul",[t("li",[v._v("项目：如没有刻意说明，通常指 "),t("code",[v._v("git")]),v._v(" 仓库")]),v._v(" "),t("li",[v._v("应用：项目中 某个独立的 模块/业务/服务/功能")]),v._v(" "),t("li",[v._v("底层应用：一个项目或N个应用依赖的 "),t("code",[v._v("底层逻辑")]),v._v(" ，比如系统中的 "),t("code",[v._v("用户中心")])]),v._v(" "),t("li",[v._v("公共资源：不涉及 "),t("code",[v._v("应用/业务")]),v._v(" 的逻辑，比如一些工具方法，插件，公用的组件，类似 "),t("code",[v._v("npm")]),v._v(" 托管的包")]),v._v(" "),t("li",[v._v("网关：微服务架构模式中 各个服务面向客户端交互时的中间桥梁（后面再描述）")]),v._v(" "),t("li",[v._v("脚手架：命令行工具，比如常见的各种 "),t("code",[v._v("cli")]),v._v(" ，提供一系列操作来简化提升一些开发效率")])]),v._v(" "),t("h2",{attrs:{id:"索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[v._v("#")]),v._v(" 索引")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E4%BB%80%E4%B9%88%E6%98%AF%E5%BE%AE%E5%BC%80%E5%8F%91"}},[v._v("什么是微开发？")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E5%BE%AE%E5%BC%80%E5%8F%91%E6%A8%A1%E5%BC%8F%E5%92%8C%E4%BC%A0%E7%BB%9F%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%8C%BA%E5%88%AB"}},[v._v("微开发和传统开发的区别？")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E5%BE%AE%E5%BC%80%E5%8F%91%E5%92%8C%E5%BE%AE%E6%9C%8D%E5%8A%A1%E7%9A%84%E5%8C%BA%E5%88%AB"}},[v._v("微开发和微服务的区别？")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E6%8A%80%E6%9C%AF%E5%AE%9E%E7%8E%B0"}},[v._v("微开发的技术实现？")])])]),v._v(" "),t("h2",{attrs:{id:"什么是微开发？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是微开发？"}},[v._v("#")]),v._v(" 什么是微开发？")]),v._v(" "),t("p",[v._v("当一个项目变得越来越庞大时，不管在维护方面，还是拓展，或构建编译等各方面，都会带来过多多少的性能瓶颈，而微开发在设计之初，则是为了解决这个问题。")]),v._v(" "),t("p",[v._v("微开发借鉴了微服务思想中的抽象模式，摒弃了独立发布部署之后利用 "),t("code",[v._v("网关")]),v._v(" 面向客户端请求进行路由转发的层面，来以此避免各个 "),t("code",[v._v("应用")]),v._v(" 之间的耦合问题。")]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("意外之喜")]),v._v(" "),t("p",[v._v("当这个设计完成之后，意外收到了其他的好处，在下方 微开发的优点 中会提到！")])]),v._v(" "),t("h2",{attrs:{id:"微开发模式和传统模式的区别？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微开发模式和传统模式的区别？"}},[v._v("#")]),v._v(" 微开发模式和传统模式的区别？")]),v._v(" "),t("h3",{attrs:{id:"传统模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传统模式"}},[v._v("#")]),v._v(" 传统模式")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://assets.processon.com/chart_image/5f0ec3c6f346fb2bfb26ae43.png",alt:"传统结构"}})]),v._v(" "),t("p",[v._v("通过上图可以看出结构基本如下：")]),v._v(" "),t("ul",[t("li",[v._v("一个项目包含：\n"),t("ul",[t("li",[v._v("N个应用")]),v._v(" "),t("li",[v._v("一大堆公共资源")])])])]),v._v(" "),t("p",[v._v("那么，这会带来什么问题呢？")]),v._v(" "),t("ol",[t("li",[v._v("任何一个地方的代码出现致命问题，整个项目都会报错")]),v._v(" "),t("li",[v._v("如果不同的应用，上线日期不同，而又依赖 "),t("code",[v._v("底层业务")]),v._v(" ，将会带来很大的维护成本")]),v._v(" "),t("li",[v._v("当前项目中的 "),t("code",[v._v("公用资源")]),v._v(" 如何共享给其他项目使用？")]),v._v(" "),t("li",[v._v("构建编译慢，虽然可以有各种方法优化")])]),v._v(" "),t("h3",{attrs:{id:"微开发模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微开发模式"}},[v._v("#")]),v._v(" 微开发模式")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://assets.processon.com/chart_image/5f0ec723f346fb2bfb26bebb.png",alt:"微开发结构"}})]),v._v(" "),t("p",[v._v("通过上图可以看出结构基本如下：")]),v._v(" "),t("ul",[t("li",[v._v("N个应用拆分成N个项目")]),v._v(" "),t("li",[v._v("底层应用一个项目")]),v._v(" "),t("li",[v._v("公共资源一个项目")])]),v._v(" "),t("p",[v._v("那么，这能解决什么问题呢？")]),v._v(" "),t("ol",[t("li",[v._v("任何一个地方的代码出现致命问题，其他都是独立的仓库，怎么也影响不到了。")]),v._v(" "),t("li",[v._v("如果不同的应用，依赖 "),t("code",[v._v("底层应用")]),v._v(" ，上线日期也不同，又需要修改 "),t("code",[v._v("底层应用")]),v._v(" ，直接开分支进行注入即可。")]),v._v(" "),t("li",[v._v("当前项目中的 "),t("code",[v._v("公用资源")]),v._v(" ，其他项目用同样的方式，直接注入即可。")]),v._v(" "),t("li",[v._v("仅仅 把自身 "),t("code",[v._v("应用")]),v._v(" 和依赖的 "),t("code",[v._v("底层应用")]),v._v(" 进行构建编译即可。")])]),v._v(" "),t("h2",{attrs:{id:"微开发和微服务的区别？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微开发和微服务的区别？"}},[v._v("#")]),v._v(" 微开发和微服务的区别？")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("说明")]),v._v(" "),t("p",[t("strong",[v._v("微开发")]),v._v(" 和 "),t("strong",[v._v("微服务")]),v._v(" 其实是有一些异曲同工之处，当然，各自也有各自的优缺点，这和他们各自的应用场景有很大的关系。")])]),v._v(" "),t("h3",{attrs:{id:"共同之处"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#共同之处"}},[v._v("#")]),v._v(" 共同之处")]),v._v(" "),t("p",[v._v("两者在开发阶段，从项目架构上，"),t("strong",[v._v("代码库")]),v._v(" 都按照 "),t("code",[v._v("应用")]),v._v(" 进行拆分，各自研发各自的，互相不冲突。")]),v._v(" "),t("h3",{attrs:{id:"不同之处"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同之处"}},[v._v("#")]),v._v(" 不同之处")]),v._v(" "),t("p",[v._v("两者最大的不同之处，先从 "),t("code",[v._v("通信")]),v._v(" 说起吧。")]),v._v(" "),t("h4",{attrs:{id:"微服务通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微服务通信"}},[v._v("#")]),v._v(" 微服务通信")]),v._v(" "),t("p",[v._v("微服务，每个应用启动时，除了采用 "),t("code",[v._v("http")]),v._v(" 的方式，还有其他诸如："),t("code",[v._v("WS")]),v._v(" ,  "),t("code",[v._v("RPC")]),v._v(" 等，也就是说，他们各自运行各自的服务，除了可以通过 "),t("code",[v._v("http")]),v._v(" 进行 调用，还可以通过其他方式进行互通，我了解的比较经典的就是 "),t("code",[v._v("RPC")]),v._v(" 了，据说这个玩意，可以像 本地调用 一样 进行调用 远程机器 上的代码，这是什么意思呢？")]),v._v(" "),t("p",[v._v("比如前端开发中的 "),t("code",[v._v("npm")]),v._v(" 包，你想用一个包，你需要 "),t("code",[v._v("npm install packageName")]),v._v(" 安装到你的本地，然后你才能 "),t("code",[v._v("import")]),v._v(" or "),t("code",[v._v("require")]),v._v(" 对吧？")]),v._v(" "),t("p",[v._v("但是，"),t("code",[v._v("RPC")]),v._v(" 不用，人家可以通过指定的语法方式，直接去调用远端啊，调用的代码根本不需要在本地机器，还避免了像 "),t("code",[v._v("http")]),v._v(" 方式进行几次握手传输所带来的性能浪费问题。其实有点像前端的 "),t("code",[v._v("import()")]),v._v(" ，因为 "),t("code",[v._v("import()")]),v._v(" 函数的参数，可以是一个 资源的远端地址。")]),v._v(" "),t("h4",{attrs:{id:"微开发通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微开发通信"}},[v._v("#")]),v._v(" 微开发通信")]),v._v(" "),t("p",[v._v("微开发，每个应用启动时，或者启动之前，是先把 依赖 的其他应用或底层应用，通过特定手法 注入 到当前应用中，就像你常用到的包管理器，先把包安装到应用中，再进行引入调用，所以，微开发没有各个应用之间通信的问题，因为启动时，已经把依赖的服务，通过特定手法 进行了应用组装，一起部署。")]),v._v(" "),t("h3",{attrs:{id:"对比分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对比分析"}},[v._v("#")]),v._v(" 对比分析")]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[v._v("两者的对比分析，我们暂且从两个维度 "),t("code",[v._v("开发阶段")]),v._v(" 和 "),t("code",[v._v("部署阶段")]),v._v(" 进行 简单的 "),t("strong",[v._v("大致")]),v._v(" 说明一下。")])]),v._v(" "),t("h4",{attrs:{id:"开发阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发阶段"}},[v._v("#")]),v._v(" 开发阶段")]),v._v(" "),t("p",[v._v("项目代码仓库，两种都是独立，没啥可说的。")]),v._v(" "),t("p",[v._v("通信：")]),v._v(" "),t("ul",[t("li",[v._v("微服务，可以通过其他方式，直接进行调用通信，应用自身 的代码仓库无需变动，看起来比较优雅。")]),v._v(" "),t("li",[v._v("微开发，注入依赖的应用到自身应用进行调用，应用自身 的代码仓库上，视觉上看起来比较凌乱。")])]),v._v(" "),t("h4",{attrs:{id:"部署阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署阶段"}},[v._v("#")]),v._v(" 部署阶段")]),v._v(" "),t("p",[v._v("通信：")]),v._v(" "),t("ul",[t("li",[v._v("微服务，当调用通信的 "),t("code",[v._v("目标应用")]),v._v(" 时，如果 "),t("code",[v._v("目标应用")]),v._v(" 服务挂掉，那么所有的 "),t("code",[v._v("调用者")]),v._v(" 都将失败，当然一般用户量比较大的应用，都会有或大或小的集群，来负载或避免这种问题。"),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[t("strong",[v._v("但是呢，如果 "),t("code",[v._v("目标应用")]),v._v(" 的代码层面，提交了致命的错误，那么服务肯定起不来，直接挂掉，那么所有的 "),t("code",[v._v("调用者")]),v._v(" 就真的毫无办法了")]),v._v("。")])])]),v._v(" "),t("li",[v._v("微开发，视觉上，虽然看起来是稍微凌乱了一些，但最终，依赖的 "),t("code",[v._v("应用")]),v._v(" 不会被提交到 "),t("code",[v._v("自身应用")]),v._v(" 的仓库中，因为被忽略掉，也是可以接受。"),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[v._v("并且，因为启动前先进行了注入，那么，"),t("code",[v._v("N个应用")]),v._v(" 启动前，先把 "),t("code",[v._v("依赖的应用")]),v._v(" 进行 "),t("code",[v._v("注入")]),v._v("（等同于源码复制），那么当 "),t("code",[v._v("依赖的应用")]),v._v(" 提交了致命错误时，"),t("code",[v._v("N个应用")]),v._v(" 只需要不更新 "),t("code",[v._v("依赖的应用")]),v._v(" 即可避免。")])])])]),v._v(" "),t("h2",{attrs:{id:"拓展延伸"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拓展延伸"}},[v._v("#")]),v._v(" 拓展延伸")]),v._v(" "),t("p",[v._v("上面大多场景，看起来是针对 "),t("code",[v._v("业务层面")]),v._v(" ，其实反过来想，"),t("code",[v._v("微开发")]),v._v(" 只是一个模式，或者说是一个模块化更加抽象的方式，所以抽象实现了，那么抽出来的是什么，想抽出来什么，那不就看你自己了，只要觉得合理，"),t("code",[v._v("即")]),v._v(" "),t("code",[v._v("可")]),v._v(" "),t("code",[v._v("抽")]),v._v(" 。")]),v._v(" "),t("p",[v._v("就拿前端举例子，最常见的莫过于 "),t("code",[v._v("npm package")]),v._v(" 了，或者 "),t("code",[v._v("cnpm")]),v._v(" 私服等，这些干的事，统统可以利用 "),t("code",[v._v("微开发")]),v._v(" 模式，进行管理，那么问题来了，为什么要用 "),t("code",[v._v("微开发")]),v._v(" 来做 "),t("code",[v._v("npm/cnpm")]),v._v(" 的事，这里要特别说明一下，不是替代，而是 "),t("strong",[v._v("分段")]),v._v(" ,下面从客观角度解释一下吧。")]),v._v(" "),t("h3",{attrs:{id:"npm-cnpm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-cnpm"}},[v._v("#")]),v._v(" npm/cnpm")]),v._v(" "),t("p",[v._v("他们俩，都有 公服 和  私服。")]),v._v(" "),t("ul",[t("li",[v._v("公服：就是对外公开，大家都可以访问，可以使用。")]),v._v(" "),t("li",[v._v("私服：就是内网或公司团队内部搭建部署，只有团队内部公开。")])]),v._v(" "),t("p",[t("strong",[v._v("但是，有一个致命问题，也是前端界都知道的问题：npm 其实最适合的场景是发布一些成熟的包。")]),v._v(" 那么，何为成熟的包呢？")]),v._v(" "),t("ul",[t("li",[v._v("高质量")]),v._v(" "),t("li",[v._v("高拓展")]),v._v(" "),t("li",[v._v("高通用")]),v._v(" "),t("li",[v._v("低可变")])]),v._v(" "),t("p",[t("strong",[v._v("简单来讲：在一个内部项目组和内部团队中，这个包要绝对通用，而且适合场景要考虑的周全，稳定性，质量等各方面要求也高。")])]),v._v(" "),t("p",[t("strong",[v._v("不然的话：你写了一个包，迭代频繁，再使用的时候，出现了问题，调试是极其的麻烦，而且使用者还可能没有调试源码的权限，难道要去 node_modules 去调？这很不现实。")])]),v._v(" "),t("p",[t("strong",[v._v("所以其实：npm 更实用的场景是生产环境，就比如一些开源库，他们开源发布之前，研发的过程中，大部分应该都不是从头开始使用 npm ，而是以源码的方式使用，经历了N个版本或N个项目使用稳定之后，最终开源发布 npm。")])]),v._v(" "),t("h3",{attrs:{id:"微开发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微开发"}},[v._v("#")]),v._v(" 微开发")]),v._v(" "),t("p",[v._v("上面提到了 "),t("code",[v._v("npm")]),v._v(" 的场景更适合生产环境，那么在你的包还没有达到生产的要求之前呢？其实完全可以使用 "),t("code",[v._v("微开发模式")]),v._v(" 在开发阶段，代替 "),t("code",[v._v("npm")]),v._v(" 作为内部包管理器，待经历几个版本几个项目之后，达到一定的稳定性，通过自动化脚本一键发布到 "),t("code",[v._v("npm")]),v._v("。")]),v._v(" "),t("h2",{attrs:{id:"大道至简"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大道至简"}},[v._v("#")]),v._v(" 大道至简")]),v._v(" "),t("p",[v._v("当对业务进行了拆分实现之后，其实大概可以得出结论：")]),v._v(" "),t("ul",[t("li",[v._v("拆分，或者拆库，只是一种思想或模式。")]),v._v(" "),t("li",[v._v("不局限框架，Vue，React，Angular（只要有对应的解析插件），甚至不局限于语言（如果有语言之间互通的工具的话）。")]),v._v(" "),t("li",[t("code",[v._v("应用之间")]),v._v(" 的依赖注入：一是仓库之间的依赖注入；二是业务之间的组合拼装。")])]),v._v(" "),t("h2",{attrs:{id:"技术实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技术实现"}},[v._v("#")]),v._v(" 技术实现")]),v._v(" "),t("p",[v._v("以 Vue 项目实现案例举例，流程大致如下。")]),v._v(" "),t("h3",{attrs:{id:"源码-依赖-管理器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源码-依赖-管理器"}},[v._v("#")]),v._v(" 源码 依赖 管理器")]),v._v(" "),t("p",[v._v("注意上面标题中的 "),t("code",[v._v("源码")]),v._v(" ，而不是 "),t("code",[v._v("包")]),v._v(" ，从通常开源方面讲，一个"),t("code",[v._v("包")]),v._v(" 往往都包含 "),t("code",[v._v("源码")]),v._v(" 。\n比如最常见的前端在开发 "),t("code",[v._v("js")]),v._v(" 包时，往往都是在使用 "),t("code",[v._v("ES6+")]),v._v("，"),t("code",[v._v("TypeScript")]),v._v("，或者早期的 "),t("code",[v._v("CoffeeScript")]),v._v(" ，来进行编写，最终通过编译器编译输出 浏览器能识别的 "),t("code",[v._v("es5")]),v._v(" 代码，且暴露导出的也是 "),t("code",[v._v("es5")]),v._v(" 代码。")]),v._v(" "),t("p",[t("strong",[v._v("现在我们使用 git 仓库作为包个体，引用的也是仓库中的源码，所以称之为："),t("code",[v._v("源码依赖管理器")])]),v._v("。")]),v._v(" "),t("p",[v._v("对于 "),t("code",[v._v("源码依赖管理器")]),v._v(" ，开发了一个脚手架工具，就像 管理npm包一样的方式，来管理基于Git仓库的依赖操作。"),t("a",{attrs:{href:"/cli"}},[v._v("脚手架")])]),v._v(" "),t("h3",{attrs:{id:"实现依赖管理的必备条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现依赖管理的必备条件"}},[v._v("#")]),v._v(" 实现依赖管理的必备条件")]),v._v(" "),t("ol",[t("li",[v._v("底层模块仓库\n"),t("ul",[t("li",[v._v("配置层面：对全局组件，指令，过滤器，插件，工具方法的初始化，挂载")]),v._v(" "),t("li",[v._v("应用层面：Router初始化，Store初始化，Services等其他")]),v._v(" "),t("li",[v._v("编译层面：webpack 通用配置")]),v._v(" "),t("li",[v._v("导出入口：把当前仓库需要暴露的东西导出去")])])]),v._v(" "),t("li",[v._v("每个应用仓库\n"),t("ul",[t("li",[v._v("注入：通过脚手架把依赖的 底层模块，注入到当前仓库中的指定位置（这个注入的位置的入口是被主应用仓库git忽略掉的，就像node_modules目录被忽略掉一样")]),v._v(" "),t("li",[v._v("初始化： 底层模块 的配置初始化，应用初始化，编译配置")]),v._v(" "),t("li",[v._v("组合：导入 底层模块 的导出入口，和 自身应用中进行组合（如果应用拆分的更加细粒度，这里就是进行把各个应用组合的入口）")])])])]),v._v(" "),t("h3",{attrs:{id:"仓库之间依赖注入的实现解决了什么问题？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#仓库之间依赖注入的实现解决了什么问题？"}},[v._v("#")]),v._v(" 仓库之间依赖注入的实现解决了什么问题？")]),v._v(" "),t("ol",[t("li",[v._v("仓库都分开了，其他的业务中写了致命的错误，和我啥关系呢？")]),v._v(" "),t("li",[v._v("不同业务上线日期不同，对 “底层业务” 维护？既然 “底层业务” 是一个独立仓库，那必然可以充分利用 git 的branch 功能，比如：A应用 5月10号上线，B应用 5月15号上线，B应用 需要对 底层 某个业务进行紧急调整，而 A应用 不需要，或者待定，在之前的结构里面，需要通过各种环境变量，进行动态判断，来控制。现在，只需要在底层仓库新开一个紧急分支，B应用 注入这个紧急分支，而 A应用 依然注入主分支即可。（这只是其中一个例子，实际项目中，还会有更为特殊复杂的需求导致难以管理）")]),v._v(" "),t("li",[v._v("对于底层模块的维护\n"),t("ul",[t("li",[v._v("底层模块 维护人员正常迭代")]),v._v(" "),t("li",[v._v("每个业务应用，因为注入的是源码，并且是以 Git 为个体单位 存放在应用中，那么，业务应用开发者，在碰到底层模块问题时，可以直接在注入的仓库中，进行修改，调试，这种修改调试，是完全基于当前业务所使用的真实场景，而相对模拟场景来说，代码的稳定质量效率上，是一个大的提升。并且，调试修改完了，如果你被授予底层业务仓库的写权限，你可以直接进行对底层模块的Git提交，而且，和主业务应用的Git是完全分开无冲突，仅仅是视觉上看起来是仓库嵌套仓库，操作上，完全独立。")]),v._v(" "),t("li",[v._v("基于上面这条，当前项目中的 “公用资源” 如何共享给团队使用？既然在业务层面实现了依赖注入甚至包括现场应用场景的迭代，那么对于 “公共资源” 来讲，区别仅仅是：仓库中存放的内容不同而已，其他项目如需使用，同理，注入，引入，如果被授予权限，也可以进行拓展迭代。")])])])]),v._v(" "),t("h3",{attrs:{id:"编译-发布-部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译-发布-部署"}},[v._v("#")]),v._v(" 编译&&发布&部署")]),v._v(" "),t("p",[v._v("通过上面的方式，基本可以看出来，在发布之前，依赖的底层模块已被注入到业务仓库，那么在编译发布时，等同于把自身业务和依赖的业务一起打包编译发布。\n每个业务发布之后的部署结果，都是纯粹的自身业务，这一点，刚好和微服务相反，也是在本文最初提到 “摒弃了微服务模式独立发布部署之后利用 “网关” 面向客户端请求进行路由转发的层面，来以此避免各个 “应用” 之间的耦合问题” 的实现方式。")])])}),[],!1,null,null,null);_.default=s.exports}}]);