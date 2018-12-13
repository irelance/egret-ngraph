# 1.综述
本项目用于演示如何构建一个基于已有的npm项目来构建一个egret三方库

我将使用 ```webpack```去构建```target```.min.js

如果本文没有提到将使用```第三方库的根目录```作为

# 2. 环境准备

## 2.1. 安装node.js和npm
我觉得你们这些高手都懂的

## 2.2. 安装白鹭引擎
Windows好办，按照官方的方法。

Linux：
```bash
# 安装白鹭引擎
git clone https://github.com/egret-labs/egret-core.git
# 添加命令到 ${PATH}
export PATH="/你的目录/egret-core/tools/bin:$PATH"
```

## 2.3. 安装webpack-cli & webpack
```bash
# 这里我直接全局安装，你可以安装在你的项目中
npm i -g webpack webpack-cli
```

# 3. 项目创建

## 3.1. 创建npm项目
```bash
mkdir egret-ngraph
cd egret-ngraph
npm init
# index.js 入口文件
touch index.js
```

## 3.2. 添加白鹭配置
这里仅配置编译变量
```bash
vim egretProperties.json
```
```json
{"compilerVersion": "5.2.13"}
```

## 3.3. 引入npm包
这些npm包是那些你想要引入到白鹭引擎的插件
```bash
npm i ngraph.path ngraph.graph
```

## 3.4. 定义你的三方库工作空间
```bash
mkdir -p libsrc/src libsrc/typings
```

### 3.4.1. 定义白鹭三方包
```bash
vim libsrc/package.json
```
```json
{
	"name": "ngraph",
	"typings": "typings/ngraph.d.ts"
}
```

### 3.4.2. 配置typescript项目
```bash
vim libsrc/tsconfig.json
```
```json
{
	"compilerOptions": {
		"target": "es5",
		"noImplicitAny": false,
		"sourceMap": false,
		"outFile": "bin/ngraph/ngraph.js",
		"allowJs": true
	},
	"include": [
		"src/ngraph.js"
	]
}
```

### 3.4.3. typescript的定义文件
```bash
touch libsrc/typings/ngraph.d.ts
```

## 3.5. webpack配置
```bash
vim webpack.config.js
```
```js
module.exports = {
    entry:  __dirname + "/index.js",//项目入口
    output: {//webpack output
        path: __dirname + "/libsrc/src",
        filename: "ngraph.js"
    }
}
```

# 4. 编写一些胶水代码
## 4.1. 项目入口
在本教程中是 ```index.js```.

注意一定要把你的变量设置为全局变量 (
即不能使用```var```, ```let```等来修饰，
也不要使用```window```变量，因为它不一定是所有embed环境的全局变量
)

```js
ngraph = {
    graph: require('./node_modules/ngraph.graph/index.js'),
    path: require('./node_modules/ngraph.path/index.js'),
};
```

## 4.2. 编写typescript定义
在本教程中是 ```libsrc/typings/ngraph.d.ts```

# 5. 打包白鹭插件
```bash
webpack
# the workplace
egret build libsrc
```

# 6. 引入到白鹭项目中
这个项目不能在白鹭项目的路径中，因为白鹭引擎会复制一份typescript定义文件，导致重复定义

在白鹭项目的 ```egretProperties.json``` 文件的 ```modules``` 中添加
```json
{
    "name": "ngraph",
    "path": "path/to/libsrc"
}
```
```path``` 是你的第三方 ```libsrc``` 相对于白鹭项目的位置

# 7. 使用要点
由于是二次封装，因此使用上会与官方的有稍微的不一致:
- 官方:
```js
    let createGraph = require('ngraph.graph');
    let graph = createGraph();
    graph.addNode('NYC', {x: 0, y: 0});
    graph.addNode('Boston', {x: 1, y: 1});
    graph.addNode('Philadelphia', {x: -1, y: -1});
    graph.addNode('Washington', {x: -2, y: -2});
    graph.addLink('NYC', 'Boston');
    graph.addLink('NYC', 'Philadelphia');
    graph.addLink('Philadelphia', 'Washington');
    let path = require('ngraph.path');
    let pathFinder = path.aStar(graph);
    let foundPath = pathFinder.find('NYC', 'Washington');
```
- 二次封装:
```js
    let graph = new ngraph.graph();
    graph.addNode('NYC', {x: 0, y: 0});
    graph.addNode('Boston', {x: 1, y: 1});
    graph.addNode('Philadelphia', {x: -1, y: -1});
    graph.addNode('Washington', {x: -2, y: -2});
    graph.addLink('NYC', 'Boston');
    graph.addLink('NYC', 'Philadelphia');
    graph.addLink('Philadelphia', 'Washington');
    let pathFinder = new ngraph.path.aStar(graph);
    let path = pathFinder.find('NYC', 'Washington');
```

# 8. 引用
[anvaka's ngraph.path github](https://github.com/anvaka/ngraph.path)
