(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{357:function(v,t,_){"use strict";_.r(t);var e=_(42),i=Object(e.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"问题汇总"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题汇总"}},[v._v("#")]),v._v(" 问题汇总")]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("说明")]),v._v(" "),_("p",[v._v("这里将 "),_("code",[v._v("微开发")]),v._v(" 中涉及到的一些各种问题进行汇总，方便查找和理解。")])]),v._v(" "),_("h2",{attrs:{id:"问题列表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题列表"}},[v._v("#")]),v._v(" 问题列表")]),v._v(" "),_("h3",{attrs:{id:"问：脚手架使用-ssh协议-操作-git-，提示：are-you-sure-you-want-to-continue-connecting-yes-no-fingerprint-怎么办？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问：脚手架使用-ssh协议-操作-git-，提示：are-you-sure-you-want-to-continue-connecting-yes-no-fingerprint-怎么办？"}},[v._v("#")]),v._v(" 问：脚手架使用 "),_("code",[v._v("ssh协议")]),v._v(" 操作 "),_("code",[v._v("git")]),v._v(" ，提示："),_("code",[v._v("Are you sure you want to continue connecting (yes/no/[fingerprint])?")]),v._v("怎么办？")]),v._v(" "),_("p",[v._v("答：这是 "),_("code",[v._v("ssh协议")]),v._v(" 的一种默认行为，意思是 你当前本机和通信的服务器(这里是指"),_("code",[v._v("git所在服务器")]),v._v(")是第一次通过 "),_("code",[v._v("ssh协议")]),v._v(" 的方式，需要进行一次握手确认，输入 yes 之后，会在 "),_("code",[v._v("~/.ssh/known_hosts")]),v._v(" 文件中生成一个唯一指纹（本机和本次连接的远端服务器），后续就不会再提示。")]),v._v(" "),_("p",[v._v("本机输入 yes 虽然可以解决问题。但在服务器发布时，"),_("code",[v._v("Jenkins")]),v._v(" 自动执行，无法输入 yes ，这会存在问题。")]),v._v(" "),_("p",[v._v("解决办法：方式不止一种，第一种服务器进行设置，可以跳过握手确认，但有时候我们可能是需要其他 "),_("code",[v._v("git平台的仓库")]),v._v("，这个时候从服务器解决，就不行了。")]),v._v(" "),_("p",[v._v("所以最终还是通过我们本机客户端解决，步骤如下：")]),v._v(" "),_("ol",[_("li",[v._v("打开终端（window 记得用 git bash）")]),v._v(" "),_("li",[_("code",[v._v("vim ~/.ssh/config")]),v._v(" # 如果没有该文件 ，这条命令会自动创建文件，并打开 "),_("code",[v._v("vim")]),v._v(" 编辑器模式，输入 "),_("code",[v._v("i")]),v._v(" 可进行编辑")]),v._v(" "),_("li",[v._v("复制 "),_("code",[v._v("StrictHostKeyChecking no")]),v._v(" 到文件中")]),v._v(" "),_("li",[v._v("保存退出即可。 （以后任何平台 ssh 第一次连接，都不会再提示。）")])]),v._v(" "),_("p",[_("code",[v._v("Jenkins")]),v._v(" 发布时，"),_("code",[v._v("Jenkins")]),v._v(" 所在机器，按照同样的方式设置即可。")]),v._v(" "),_("h3",{attrs:{id:"问：脚手架运行环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问：脚手架运行环境"}},[v._v("#")]),v._v(" 问：脚手架运行环境")]),v._v(" "),_("p",[v._v("答：脚手架内部需要执行 "),_("code",[v._v("git 命令")]),v._v("，所以 "),_("code",[v._v("window")]),v._v(" 需要安装 "),_("code",[v._v("git bash命令行工具")]),v._v("，需要在 "),_("code",[v._v("git bash")]),v._v(" 终端下执行，"),_("code",[v._v("window")]),v._v(" 自带 "),_("code",[v._v("cmd")]),v._v(" 不支持。")]),v._v(" "),_("h3",{attrs:{id:"问：-主业务仓库嵌套依赖子仓库，主业务仓库操作git会不会有问题？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问：-主业务仓库嵌套依赖子仓库，主业务仓库操作git会不会有问题？"}},[v._v("#")]),v._v(" 问： 主业务仓库嵌套依赖子仓库，主业务仓库操作git会不会有问题？")]),v._v(" "),_("p",[v._v("答：主业务仓库中，嵌套的依赖子仓库，将在主仓库中被 git 忽略掉，所以操作主业务仓库时，会忽略嵌套的依赖子仓库，不会把依赖的子仓库提交上去。")]),v._v(" "),_("h3",{attrs:{id:"问：使用-cli脚手架-操作依赖的子仓库git时，会不会影响到主业务仓库？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问：使用-cli脚手架-操作依赖的子仓库git时，会不会影响到主业务仓库？"}},[v._v("#")]),v._v(" 问：使用 "),_("code",[v._v("cli脚手架")]),v._v(" 操作依赖的子仓库git时，会不会影响到主业务仓库？")]),v._v(" "),_("p",[v._v("答：这个问题首先要了解一下在 终端 执行 "),_("code",[v._v("git")]),v._v(" 命令时的上下文概念，什么是上下文概念呢？")]),v._v(" "),_("p",[v._v("假设，你现在执行 "),_("code",[v._v("git status")]),v._v(" 命令，那么，你执行命令所处位置（目录），则必须是一个仓库，你这个仓库目录，就是"),_("code",[v._v("git的上下文")]),v._v("。")]),v._v(" "),_("p",[v._v("然后，当出现了 仓库嵌套子仓库时，只要你没有进入到子仓库的目录，那么，你所处的 "),_("code",[v._v("Git上下文")]),v._v("，依然是"),_("code",[v._v("外层的Git仓库")]),v._v("。")]),v._v(" "),_("p",[v._v("但是，当你一旦进入到子仓库目录时，你所处的"),_("code",[v._v("Git上下文")]),v._v("，则变成了当前所处的"),_("code",[v._v("子git仓库")]),v._v("，你在执行"),_("code",[v._v("git")]),v._v("的任何命令，都是操作的当前"),_("code",[v._v("子git仓库")]),v._v("，和"),_("code",[v._v("外层git仓库")]),v._v("没有一点关系。")]),v._v(" "),_("p",[v._v("需要注意的是：当在"),_("code",[v._v("外层git仓库")]),v._v("时，想直接操作"),_("code",[v._v("子仓库")]),v._v("，正常情况，需要 "),_("code",[v._v("cd 子仓库中")]),v._v("，然后执行 "),_("code",[v._v("git 的各种命令")]),v._v("，这比较繁琐，很麻烦。")]),v._v(" "),_("p",[v._v("不过还好，"),_("code",[v._v("git")]),v._v("提供了一个仓库 "),_("code",[v._v("-C")]),v._v(" 可以指定"),_("code",[v._v("git仓库上下文")]),v._v("，比如在"),_("code",[v._v("外层git仓库")]),v._v("执行 "),_("code",[v._v("git -C 子仓库的目录位置 status")]),v._v(" 时，这个时候，就等同于 "),_("code",[v._v("cd 子仓库的目录位置 && git status")]),v._v(" 。")]),v._v(" "),_("p",[v._v("脚手架内部，就是用到了 "),_("code",[v._v("-C")]),v._v(" 这个参数。")]),v._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[v._v("注意注意注意")]),v._v(" "),_("p",[v._v("git 参数 -C , 需要 git的版本 1.9.x 才支持，本机安装的一般都是最新的，而 Linux 系统中，如果使用 yum 安装，大多默认版本都是 1.8.x ，如果版本不对，则需要升级。")])]),v._v(" "),_("h3",{attrs:{id:"问：git版本升级会不会影响现在git功能？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问：git版本升级会不会影响现在git功能？"}},[v._v("#")]),v._v(" 问：git版本升级会不会影响现在git功能？")]),v._v(" "),_("p",[v._v("正常来讲，升级一个小版本号，应该不会有问题。")]),v._v(" "),_("h2",{attrs:{id:"备注"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#备注"}},[v._v("#")]),v._v(" 备注")]),v._v(" "),_("p",[v._v("本文中涉及了一些颇多技术方面的概念和知识，可能会有不当之处，如有不对之处，还请指出，以免给他人造成误解，非常感谢。")]),v._v(" "),_("h2",{attrs:{id:"联系我"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#联系我"}},[v._v("#")]),v._v(" 联系我")]),v._v(" "),_("ul",[_("li",[v._v("作者：老君")]),v._v(" "),_("li",[v._v("Email：yaimeet@163.com")]),v._v(" "),_("li",[v._v("Github: "),_("a",{attrs:{href:"https://github.com/yaimeet",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://github.com/yaimeet"),_("OutboundLink")],1)]),v._v(" "),_("li",[v._v("QQ/WeChat：823393100")])])])}),[],!1,null,null,null);t.default=i.exports}}]);