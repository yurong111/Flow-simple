# Flow-simple

1. 安装编译工具

```
yarn add --dev babel-cli babel-preset-flow
```

后来发现还是没有babel-node命令，再全局装了一次babel-cli

```
npm install -g babel-cli
```

2. 增加.babelrc文件

```
{
  "presets": ["flow"]
}
```

3. package.json
增加这个文件，可以设置scripts:

```
{
  "name": "my-project",
  "main": "lib/index.js",
  "scripts": {
    "build": "babel src/ -d lib/",
    "prepublish": "yarn run build"
  }
}
```


4. 安装flow

```
npm install --save-dev flow-bin
npm install --global flow-bin
```

安装完后发现并没有flow这个命令，就用以下命令安装：

```
brew install flow
```

flow执行时，会启动后台线程监控文件变化，停止禁用可以用flow stop命令；
如果你想检查一下，不希望启用线程监控，可用flow check。


5. 初始化flow项目

会生成一个.flowconfig文件

```
flow init
```


6. 编写flow代码

只需要在文件头部加入以下信息，否则flow会认为该文件暂时不需要检查

```
// @flow
```

或者

```
/* @flow */
```

7. flow检查

通过以下命令开启后台进程，第一次执行时，会整个项目所有flow文件都会检查，再次执行flow时，只会执行变更文件

```
flow status
```

或者

```
flow
```

8. 运行代码

当执行以下命令时，就算是有类似异常，代码也会正常运行，因为flow的用意是类型错误提示，不禁止代码执行

```
babel-node src/index_02.js
```

> 注意，我们运行代码的时候，使用的命令是 babel-node 而不是 node。
> babel-node 包含在 babel-cli 库，其实就是在 node 上包了一层， 在原来的 node 执行前拦截代码并转换成合适的格式


9. webstorm 对 flow 的语法兼容设置

https://blog.jetbrains.com/webstorm/2016/11/using-flow-in-webstorm/