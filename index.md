## 欢迎来到我的博客

我不是一个善于表达的人，写技术博客现在对于我来说算是一种突破。从事IT软件行业10年了，15年之前一直都是在做后端java项目开发，之后才开始真正的专攻前端。做了不少项目有积累但沉淀下来的随着时间的推移却慢慢忘却了不少，这也是我想开个博客的原因。

虽然写博客对于我来说是很花时间花精力的事情，其实这也是我自己克服拖延和惰性。在项目结束后做一个总结和回顾，虽然这在高强度的工作压力中挤出时间来做很难但这也是巩固完善自我体系同时加深知识，同时还可以分享出去让需要的人能够不踩我踩过的坑，也可以和更多的人一起讨论可以取长补短。好了，说了这么多好处无非就是自我催眠改掉懒病。

### fans


[fans](https://github.com/yujinjin/fans)是一个app(android/iOS)项目，但页面视图全部都用的是html5页，没有使用app的原生页面，项目可以直接在PC上运行html5页面。与服务端的交互全部都是走web api接口方式。客户端的登录是JSON WEB TOKEN 认证([JSON Web Token（JWT)是什么鬼](https://github.com/bigmeow/JWT))。项目里有android Apk打包文件,可以直接下载安装[点此链接下载](https://github.com/yujinjin/fans/tree/master/unpackage/release/fans.apk)。 

前端h5是基于[mui](http://dev.dcloud.net.cn/mui/) + [vue2](http://cn.vuejs.org/v2/api/) + [vue-router2](http://router.vuejs.org/zh-cn/) + [es6](http://es6.ruanyifeng.com/) + [webpack2](http://webpack.github.io/) + [vuex](http://vuex.vuejs.org/zh-cn/) + [signalR](http://signalr.net/)的前端webApp单页项目框架。

app打包技术是用[HBuilder IDE](http://www.dcloud.io/index.html)工具一键打包成APP，本项目使用了原生设备的的Storage和管理条码扫描。对于app的升级是html5资源在线升级更新,而不是整个APP更新。这些都是[dcloud](http://www.dcloud.io/index.html)提供一整套技术解决方案。

本项目只是一个技术框架，对于项目中具体的业务的东西只会大概的说明一下。


**说明：** 可能有些朋友不知道[signalR](http://signalr.net/)是什么东西，其实[signalR](http://signalr.net/)就是让客户端（Web页面）和服务器端可以互相通知消息及调用方法的前端JS，当WebSockets可用时（即浏览器支持Html5）[signalR](http://signalr.net/)使用WebSockets，当不支持时[signalR](http://signalr.net/)将使用其它技术来保证达到相同效果。


### list-pull-loading
[list-pull-loading](https://github.com/yujinjin/list-pull-loading)是一个基于VUE实现的下拉刷新，上拉加载的组件，支持图片懒加载，数据缓存（返回列表页记住当前位置）。主使用IScroll（iscroll-probe）来实现，提供了项目中数据列表经常会用到的下拉提示信息、上拉提示信息、图片懒加载、回到顶部，其提示信息UI、内容可灵活配置，可使用提供的默认样式也可以自定义也可以隐藏。

列表初始化时也做了优化，对于没有列表数据时显示没有数据的提示信息（可自定义），对于首次加载的数据没有超过一屏时会自动加载下一页的数据，但最多只会自动加载2次（可配置）。

#### demo
[___Demo___](https://yujinjin.github.io/list-pull-loading/)