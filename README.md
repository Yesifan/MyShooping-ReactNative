## MyShooping-ReactNative 仿美团的ReactNative项目

## 依赖安装

需要安装node等react-native必须依赖的工具。详情见[https://reactnative.cn/docs/0.51/getting-started.html](https://reactnative.cn/docs/0.51/getting-started.html)

运行项目还必须要用到mysql

安装完上述依赖之后 到 ServerToShooping/routes/server.js 中修改mysql用户配置

然后在两个子项目中分别运行 npm i 或 yarn 

即可通过 react-native run-android||run-ios,npm start 来分别运行客户端和服务端

### 1.服务器端

服务器端由webpack+react+express完成

主要功能有登录、模块选择、查看、修改、删除、分页等后台管理的基本功能

主页面是使用了react-route的单页面应用

##### 登陆页面
![](http://i.imgur.com/W532C2g.png)

##### 商家列表页面
![](http://i.imgur.com/oElC5G1.png)

##### 插入操作
![](http://i.imgur.com/coF1Vr8.png)

##### 订单页面
![](http://i.imgur.com/H6lEA0N.png)
### 2.APP端

app端由react-native完成

使用了redux和react-navigation



##### 导航逻辑图
![](http://i.imgur.com/Q0NbtJr.png)

##### 组件关系图
![](http://i.imgur.com/lXyvyek.png)

##### App运行演示
![](http://i.imgur.com/VMAZpkL.gif)

### 3.npm包

>react的路由库 可以简单的开发单页面应用。
>它通过管理 URL，实现组件的切换和状态的变化

<a href="https://reacttraining.com/react-router/">react-router</a>

>react-native中的数据持久化方法，用它实现了用户的持久化登陆

<a href="https://github.com/sunnylqm/react-native-storage">react-native-storage</a>

>官方推荐的导航组件 非常易用。

<a href="https://reactnavigation.org/">react-navigation</a>

>redux 状态管理解决方法 在这个Demo中只是实验性的用了一下。

<a href="https://github.com/reactjs/react-redux">react-redux</a>
