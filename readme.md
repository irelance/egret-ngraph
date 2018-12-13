# 1. Abstract
This project is mean to describe how to build a third party library to egret game engine, 
which base on ```npm``` package

I will use ```webpack``` to build the ```target```.min.js

I will use third-party root as base path, if I hadn't mentioned it.

# 2. Environment prepare

## 2.1. install node.js & npm
I suppose you guys acknowledge this :)

## 2.2. install egret engine
I want to code on Linux Env, but their tools not support, so I had to develop on Windows.

If you guys want to develop on Linux anyway, you may install egret to the project
to use the ```egret``` command
```bash
# install egret if you are (Li|U)nix
git clone https://github.com/egret-labs/egret-core.git
# add to ${PATH}
export PATH="/path/to/egret-core/tools/bin:$PATH"
```

## 2.3. install webpack-cli & webpack
```bash
# you can install in your project
npm i -g webpack webpack-cli
```

# 3. Create the project

## 3.1. create npm project
```bash
mkdir egret-ngraph
cd egret-ngraph
npm init
# index.js is your project entry
touch index.js
```

## 3.2. egret config
Just to define which egret version to compile this project
```bash
vim egretProperties.json
```
```json
{"compilerVersion": "5.2.13"}
```

## 3.3. require relay project
These npm packages are what you want to bind to the egret engine
```bash
npm i ngraph.path ngraph.graph
```

## 3.4. define your egret third-party workplace
```bash
mkdir -p libsrc/src libsrc/typings
```

### 3.4.1. egret package config
```bash
vim libsrc/package.json
```
```json
{
	"name": "ngraph",
	"typings": "typings/ngraph.d.ts"
}
```

### 3.4.2. typescript config
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

### 3.4.3. typescript declaration file
```bash
touch libsrc/typings/ngraph.d.ts
```

## 3.5. webpack config
```bash
vim webpack.config.js
```
```js
module.exports = {
    entry:  __dirname + "/index.js",//your project entry
    output: {//webpack output
        path: __dirname + "/libsrc/src",
        filename: "ngraph.js"
    }
}
```

# 4. write your code
## 4.1. entry file
In this project is ```index.js```.

You must make your object expose in global (
that means you must not use ```var```, ```let``` 
and do not use ```window``` as global var, because just browser supports that
)

```js
ngraph = {
    graph: require('./node_modules/ngraph.graph/index.js'),
    path: require('./node_modules/ngraph.path/index.js'),
};
```

## 4.2. typescript declaration file
In this project is ```libsrc/typings/ngraph.d.ts```

Just define what you want to expose to egret

# 5. build egret library
```bash
webpack
# the workplace
egret build libsrc
```

# 6. require to egret project
This project (third-party) must not in egret project (I means directory). 
Because egret would copy the ```typescript declaration file``` and cause duplicate declaration.

Find egret project ```egretProperties.json``` and add below config to ```modules``` json array
```json
{
    "name": "ngraph",
    "path": "path/to/libsrc"
}
```
The ```path``` key is where your third-party libsrc is location relate to your egret project.

After you build the egret project. You will find that your libsrc/bin/ngraph was just copy to egret project lib/modules/ngraph and add add the bin path to manifest.json

# 7. usage attention
The official usage would be change:
- official:
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
- third-party package:
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

# 8. Reference
[anvaka's ngraph.path github](https://github.com/anvaka/ngraph.path)
