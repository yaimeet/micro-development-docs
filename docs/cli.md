# 脚手架

::: tip 说明
这个脚手架的实现是为了解决，使用Git仓库作为包管理，提供的一系列标准规范，就像使用 `npm命令` 管理 `npm包` 一样，但最后业务中逻辑怎么写，和脚手架是没有关系的，知悉知悉！
:::

::: danger 须知，术语定义
由于本篇中涉及了其他知识点和一些概念，下对一些词做一个预定义解释，方便快速理解。
:::

- 配置文件：通过脚手架生成且后续管理依赖所需的配置文件：micro-development.json
- cli：脚手架简称
- npm：前端包管理工具，不用说了
- repo：git仓库
- repoName：git仓库名称
- branch：git仓库的分支
- branchName：git仓库的分支名称
- npmPakcage：npm包
- gitPackage：也就是git仓库，在脚手架中被称为：git包
- packageKey: 配置文件中 对 `gitPackage` 生成的唯一标识，同时，也是该 `gitPackage` 在本地存在的 `物理文件夹（目录）` 名称
- gitCommand：操作的Git命令，如：git status , git add , git commit 等
- 主业务仓库：你现在负责的业务的Git仓库
- 依赖的业务仓库：你现在的业务仓库，依赖的其他git仓库（就像你开发一个npm包实现某个功能，依赖了其他的npm包一样）
- 子仓库：如果没有特殊说明，等同于：`依赖的业务仓库`
- 项目：如果没有特殊说明，等同于 `主业务仓库`

## 核心功能

脚手架的主要功能是解决两个问题：把 `repo` 作为依赖包的管理操作 和 简化 `gitCommand` 的操作。

### 管理依赖

依赖的管理，就像 `npm` 一样，可以通过 配置文件 管理 `npmPackage` 。

### 简化git操作

为什么会有 简化 `gitCommand` 操作？通过 [概念](/concept) ，可以了解到 `微开发模式` 最后的效果就是 `主业务仓库` 嵌套 `依赖的业务仓库` , 那么最终，其实就是在操作 `git` 。

由于是 嵌套 的关系，那么在操作 `子仓库` 的时候，肯定会有一些麻烦，所以脚手架内部进行了封装，简化这个操作。


## 安装

```bash
npm install -g micro-development-cli
```

安装完成之后，全局使用命令名称：`md-cli` 。

### 测试

执行命令

```bash
md-cli
```

输出以下信息即代表成功。

```bash
基于微开发模式的脚手架工具 micro-development-cli

VERSION
  micro-development-cli/0.1.0 darwin-x64 node-v12.14.0

USAGE
  $ md-cli [COMMAND]

COMMANDS
  add      （a）安装一个依赖（git仓库）
  commit   （c）提交仓库变更（git commit）
  help     display help for md-cli
  init     初始化配置文件（micro-development.json）
  install  （i）安装配置文件中所有的依赖（git仓库），已安装则忽略
  remove   （r）移除一个依赖（git仓库）
  status   （s）查看一个依赖变更状态（git status）
  update   （u）更新一个依赖（git仓库）
```

## init

::: tip 说明
初始化 配置文件 `micro-development.json` ，执行的时候会检测当前目录是否存在该文件，存在则忽略，并给出提示。
**需要注意的是：必须在 `主业务仓库` 根目录执行.**
:::

### 示例

```bash
md-cli init
```

执行完 `md-cli init` 命令（类似 `npm init`） , 会让你输入包含以下信息的字段（dependencies 除外），然后生成配置文件：`micro-development.json` 。


| FieldName        | Type           | Required           | Description  |
| ------------- |:-------------:| -----:| -----:|
| name              | string      | yes      |    项目名称 |
| description       | string      | yes      |    项目描述 |
| author            | string      | yes      |    作者 |
| targetDir         | string      | yes      |    存储 `依赖的业务仓库` 的目录位置，就像 npm 的 `node_modules` |
| gitHost           | string      | yes      |    git服务器主机地址 |
| gitNamespace      | string      | yes      |    git命名空间，或者用户名（owner） |
| packageKeySplit   | string      | on      |     packageKey是由仓库名和组织名拼接，这个是拼接符号，默认为 `#` |
| dependencies      | object      | no       |    `gitPackage`（见术语定义） |
| lock              | boolean     | yes      |    是否锁定，锁定之后不可以再通过脚手架操作 |

> 注意：Required是指在输入的时候，都是必填。

#### dependencies

`依赖的业务仓库` 信息都存储在 dependencies 中，该字段类型为对象，key 和 value 信息如下：

- key：packageKey
- value：gitPackage

key是 `cli` 自动生成，这个名称不支持自定义，因为这个名称将代表 `gitPackage` 在本机存储的 目录名称 ,而目录名称的定义是有限制，所以 `cli` 内部自动处理。

**完整的结构如下：**

```ts
export interface InitParams {
    name: string;
    description: string;
    author: string;
    targetDir: string;
    gitHost: string;
    gitNamespace: string;
    packageKeySplit: string;
    dependencies: {
        [propName: string]: PackageConfig;
    };
    lock: boolean;
}

export interface PackageConfig {
    gitUrl?: string;
    gitNamespace?: string;
    gitRepoName?: string;
    gitBranchName?: string;
    lock: boolean;
}
```


#### targetDir

这个参数类似 `npm` 包存储的目录 `node_modules` ，默认为： `src/base-resource` 。


::: warning 注意
必须以相对路径开头，且不能以斜杠结尾（后续会兼容可以斜杠结尾）。
:::

有效的例子：

- ./foo
- foo

无效的例子：

- /foo 绝对路径开头
- ./foo/  以斜杠结尾


假设该选项采用默认值： `src/base-resource` ，在安装依赖的仓库时，就会把仓库安装到  `src/base-resource` 下面。


#### gitHost

示例：

- GitHub ：`git@github.com`
- gitee : `git@gitee.com`
- 自定义 ： `git@xxx.com`
- http协议 `https://github.com`

#### gitNamespace

假设仓库完整的URL为：`git@github.com:ittlr/micro-development-docs.git` ，那么 `gitNamespace` 对应的则是： `ittlr`。

::: danger 注意
目前对这个处理，只兼容了常规的Git路径层级，像  Gitlab  支持分组嵌套分组，路径可能会像这样：git@gitlab.com:a/b/c/e.git ，这种深层次的还未做兼容处理。（后续兼容）
:::

### 配置文件

当输出完所有参数之后，生成的配置文件  `micro-development.json` 完整内容如下：

```json
{
  "name": "test",
  "description": "test",
  "author": "test",
  "targetDir": "src/base-resource",
  "gitHost": "git@github.com",
  "gitNamespace": "ittlr",
  "packageKeySplit": "#",
  "dependencies": {},
  "lock": false
}
```

#### dependencies

这个字段存储的格式如下：

```json
{
  "gitRepoName#gitBranchName": {
    "gitRepoName": "gitRepoName",
    "gitBranchName": "master",
    "lock": false
  },
  "gitUrl#gitBranchName": {
    "gitBranchName": "master",
    "gitUrl": "gitUrl",
    "lock": false
  },
}
```

`key` 的格式为两种：

1. `gitRpoName#gitBranchName`
2. `gitUrl#gitBranchName`

当为第1种时，代表的是该仓库属于全局配置的 `gitHost` 平台下。

当为第2种是，代表的是使用的其他自定义的 GitServer。

后面拼接的 `#gitBranchName` 是为了可以针对一个仓库使用不同分支而实现的**唯一标识**。

::: warning 说明
具体依赖的操作，下面通过各种命令进行说明。
:::

##  add

::: tip 添加包
添加依赖（git仓库），写入配置文件中 `dependencies` 中。
:::

### 格式

```bash
md-cli add # or md-cli a
```

执行 `add` 命令后，会出现一个下拉选项：

```bash
? 使用默认配置或者自定义？（选择使用默认配置还是自定义）
  1) 默认？继续输入仓库名和分支名
  2) 自定义？输入其他git平台的地址
  Answer:
```

#### 选择 1 默认

会让你输入以下几个选项:

- gitNamespace `String` git命名空间 **（可选，如果这里输入了，即代表该仓库所属命名空间不属于全局配置的git命名空间）**
- gitRepoName : `String` 仓库名称 **（必选）**
- gitBranchName : `String` 分支名称，默认为 `master` **（必选）**
- lock : `Boolean` 是否锁定，默认为 false ，不锁定。 **（必选）**

::: warning 注意
输入完成后，内部会以 `${gitRepoName}#${gitBranchName}` 作为唯一表示，检测是否已在 `dependencies` 中。
:::

最终生成的结构如下：
```json
{
  "dependencies": {
    "${gitRepoName}#${gitBranchName}": {
      "gitNamespace": "没输入则没有该字段",
      "gitRepoName": "输入的仓库名",
      "gitBranchName": "输入的分支名",
      "lock": "选择的 true/false"
    }
  }
}
```

#### 选择 2 自定义

会让你输入以下几个选项:

- gitUrl : `String` 仓库地址，**必须是完整的可以被git克隆的URL，可以是http协议，也可以是ssh协议** **（必选）**
- gitBranchName : `String` 分支名称，默认为 `master` **（必选）**
- lock : `Boolean` 是否锁定，默认为 false ，不锁定。 **（必选）**

最终生成的示例结构如下：
```json
{
  "dependencies": {
    "处理后的标识": {
      "lock": "选择的 true/false",
      "gitUrl": "输入的gitUrl"
    }
  }
}
```

这里有个需要注意的地方：输入的 `gitUrl` 支持两种方式：`ssh协议` 或 `http协议`，两种协议的主要区别是：主机和git命名空间之间分隔符不同，前者用的是冒号 `:` ，后者用的是斜杠 `/` 。

以命令行中给出的示例：`git@github.com:username/repo.git` 和 `https://github.com/username/repo.git` 为例，内部会做以下处理：

1. 去掉开头前面的协议： `git@` 或 `http://` 或 `https://` ，还剩下 `github.com:username/repo.git` 或 `github.com/username/repo.git` 。
2. 去掉.git后缀：`.git` ，还剩下：`github.com:username/repo` 或 `github.com/username/repo` 。
3. 所有斜杠 `/` 替换成 `@` ，如果是 `ssh协议` , 把冒号 `:` 也替换为 `@` ，最终的结果就是：`github.com@username@repo` 。
4. 在最后，拼接一下分支 `#分支名` , 最终得出唯一的标识，存到 `dependencies` 中。
5. 所以，如果输入 `git@github.com:username/repo.git` 和 `https://github.com/username/repo.git` 两个URL，如果选择的分支都是一样的话，那么内部就可以判断为：**添加依赖重复**。

最终生成的完成结构如下：
```bash
{
  "dependencies": {
    "github.com@username@repo#master": {
      "lock": false,
      "gitUrl": "git@github.com:username/repo.git"
    }
  }
}
```
或者
```bash
{
  "dependencies": {
    "github.com@username@repo#master": {
      "lock": false,
      "gitUrl": "https://github.com/username/repo.git"
    }
  }
}
```

::: warning 注意
`add` 命令，仅仅是写入文件，不立即安装。（后续版本会支持）
:::

## install

:::tip 安装包
把 `add` 添加的包，也就是 `dependencies` 字段中的包，执行 `git clone` 安装到本地。

**如果已安装，则给出提示自动跳过**
:::

### 格式

```bash
md-cli install # or md-cli i
```

::: warning 注意
如果 全局 `lock` 为 `true` ，则不执行安装； 某个包中的 `lock` 为 `true` ，则跳过。
:::


## update

:::tip 更新包
更新包，内部是执行 `git pull`。
:::

### 格式

```bash
md-cli update [option?]
```

option 参数分为以下三种情况：

1. `all`
2. `packageKey`
3. 不传参数

#### all

当为 `all` 时，会遍历  `dependencies` 字段中所有的包，进行遍历更新，同时，会检测包全局配置的 `lock` 和 每一个包的 `lock` 。

#### packageKey

`packageKey` 必须是 配置文件中  `dependencies` 字段中的某一个完整的 `key`值，同时，会检测包全局配置的 `lock` 和 当前包的 `lock` 。


#### 不传参数

当不传参数时，会列出一个下拉框，下拉框的每一个选项则是：配置文件中  `dependencies` 字段的所有的 `key` ，由你手动选择进行更新，同时，会检测包全局配置的 `lock` 和 当前包的 `lock` 。


## status

:::tip 变更状态
查看包的Git变更状态，内部是执行 `git status`。
:::

### 格式

```bash
md-cli status [option?]
```

option 参数分为以下三种情况：

1. `all`
2. `packageKey`
3. 不传参数

#### all

当为 `all` 时，会遍历  `dependencies` 字段中所有的包，进行遍历更新，同时，会检测包全局配置的 `lock` 和 每一个包的 `lock` 。

#### packageKey

`packageKey` 必须是 配置文件中  `dependencies` 字段中的某一个完整的 `key`值，同时，会检测包全局配置的 `lock` 和 当前包的 `lock` 。


#### 不传参数

当不传参数时，会列出一个下拉框，下拉框的每一个选项则是：配置文件中  `dependencies` 字段的所有的 `key` ，由你手动选择进行更新，同时，会检测包全局配置的 `lock` 和 当前包的 `lock` 。



## commit

:::tip git提交
提交依赖中的变更，内部执行 `git commit -a && git commit -am commitContent && git pull && git push` (后面会把 push 分开)。
:::

### 格式

```bash
md-cli commit [option]
```

option 参数分为以下两种情况：

> **按照git标准，提交信息必须明确且语义化，所以一次只能提交一个仓库。（虽然可以一次提交多个仓库，但有违常理😁）**

1. `packageKey`
2. 不传参数


#### packageKey

`packageKey` 必须是 配置文件中  `dependencies` 字段中的某一个完整的 `key`值，同时，会检测包全局配置的 `lock` 和 当前包的 `lock` 。

检测通过之后，会再次让输入 `git commit` 的信息 `commitContent` ,输入完成之后，进行提交git。

#### 不传参数

当不传参数时，会列出一个下拉框，下拉框的每一个选项则是：配置文件中  `dependencies` 字段的所有的 `key` ，由你手动选择进行移除，同时，会检测包全局配置的 `lock` 和 当前包的 `lock` 。

选择并检测通过之后，会再次让输入 `git commit` 的信息  `commitContent` ,输入完成之后，进行提交git。

## remove

:::tip 移除包
移除包，从配置文件中移除指定的包，然后更新配置文件，不会删除已安装在本地的物理文件（如果已安装的话）。
:::

### 格式

```bash
md-cli remove [option]
```

option 参数分为以下三种情况：

1. `all`
2. `packageKey`
3. 不传参数


#### all

当为 `all` 时，会遍历 配置文件中的  `dependencies` 字段中所有的包，进行遍历移除，同时，会检测包全局配置的 `lock` 和 每一个包的 `lock` 。

#### packageKey

`packageKey` 必须是 配置文件中  `dependencies` 字段中的某一个完整的 `key`值，同时，会检测包全局配置的 `lock` 和 当前包的 `lock` 。


#### 不传参数

当不传参数时，会列出一个下拉框，下拉框的每一个选项则是：配置文件中  `dependencies` 字段的所有的 `key` ，由你手动选择进行移除，同时，会检测包全局配置的 `lock` 和 当前包的 `lock` 。


