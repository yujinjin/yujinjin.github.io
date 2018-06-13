# 欢迎来到我的博客

我不是一个善于表达的人，写技术博客现在对于我来说算是一种突破。从事IT软件行业10年了，15年之前一直都是在做后端java项目开发，之后才开始真正的专攻前端。做了不少项目有积累但沉淀下来的随着时间的推移却慢慢忘却了不少，这也是我想开个博客的原因。

虽然写博客对于我来说是很花时间花精力的事情，其实这也是我自己克服拖延和惰性。在项目结束后做一个总结和回顾，虽然这在高强度的工作压力中挤出时间来做很难但这也是巩固完善自我体系同时加深知识，同时还可以分享出去让需要的人能够不踩我踩过的坑，也可以和更多的人一起讨论可以取长补短。好了，说了这么多好处无非就是自我催眠改掉懒病。

# fans


[fans](https://github.com/yujinjin/fans)是一个app(android/iOS)项目，但页面视图全部都用的是html5页，没有使用app的原生页面，项目可以直接在PC上运行html5页面。与服务端的交互全部都是走web api接口方式。客户端的登录是JSON WEB TOKEN 认证([JSON Web Token（JWT)是什么鬼](https://github.com/bigmeow/JWT))。项目里有android Apk打包文件,可以直接下载安装[点此链接下载](https://github.com/yujinjin/fans/tree/master/unpackage/release/fans.apk)。 

前端h5是基于[mui](http://dev.dcloud.net.cn/mui/) + [vue2](http://cn.vuejs.org/v2/api/) + [vue-router2](http://router.vuejs.org/zh-cn/) + [es6](http://es6.ruanyifeng.com/) + [webpack2](http://webpack.github.io/) + [vuex](http://vuex.vuejs.org/zh-cn/) + [signalR](http://signalr.net/)的前端webApp单页项目框架。

app打包技术是用[HBuilder IDE](http://www.dcloud.io/index.html)工具一键打包成APP，本项目使用了原生设备的的Storage和管理条码扫描。对于app的升级是html5资源在线升级更新,而不是整个APP更新。这些都是[dcloud](http://www.dcloud.io/index.html)提供一整套技术解决方案。

本项目只是一个技术框架，对于项目中具体的业务的东西只会大概的说明一下。


**说明：** 可能有些朋友不知道[signalR](http://signalr.net/)是什么东西，其实[signalR](http://signalr.net/)就是让客户端（Web页面）和服务器端可以互相通知消息及调用方法的前端JS，当WebSockets可用时（即浏览器支持Html5）[signalR](http://signalr.net/)使用WebSockets，当不支持时[signalR](http://signalr.net/)将使用其它技术来保证达到相同效果。


# list-pull-loading
[list-pull-loading](https://github.com/yujinjin/list-pull-loading)是一个基于VUE实现的下拉刷新，上拉加载的组件，支持图片懒加载，数据缓存（返回列表页记住当前位置）。主使用IScroll（iscroll-probe）来实现，提供了项目中数据列表经常会用到的下拉提示信息、上拉提示信息、图片懒加载、回到顶部，其提示信息UI、内容可灵活配置，可使用提供的默认样式也可以自定义也可以隐藏。

列表初始化时也做了优化，对于没有列表数据时显示没有数据的提示信息（可自定义），对于首次加载的数据没有超过一屏时会自动加载下一页的数据，但最多只会自动加载2次（可配置）。

[___Demo___](https://yujinjin.github.io/list-pull-loading/)

# mobile-message
mobile-message是一个基于移动端的弹窗组件，默认提供info、success、warning、error、alert、confirm、multiple、vertical、bottomSheet、prompt，可自定义弹窗。它可以包含任何Html内容可以自定义弹窗的样式，也可以加入自定以的弹窗动画。

网上关于弹窗的组件也很多，就算是自己写代码也很少很简单。但mobile-message有一下3个不同的特点。
- 弹窗是单例模式，就是只有一个实例。这体现在当多个弹窗展示时只会显示最后一个弹窗的内容，比如：当前正在展示的是弹窗A，代码又调用了弹窗B，这个时候就会把弹窗A的内容变成弹窗B的内容，记住是变成而不是常规的先把弹窗A关掉然后再显示弹窗B。
- 一套简单的代码兼容10种弹窗模式，只是因为样式不一样，代码轻量，方便维护，容易扩展，可根据自己的业务需要自定义。
- 让弹窗弹层背后整个页面禁止滚动，而弹层自己的内容是可滚动的。这是最麻烦的处理，但看网上大多数都没做处理或者处理的不够完美。

[___Demo___](https://yujinjin.github.io/mobile-message/)

# vue-router-transition
vue页面路由转场切换时的动画插件。(待开发)

# vue-loading
基于vue实现加载动画插件。(待开发)

# hybrid技术框架协议
基于H5和APP交互协议。(待开发)

# mobile-framework(待开发)
基于vue实现移动端项目框架。

# vue-portal-framework
基于vue elemeUI实现的后台管理系统框架(待开发)

# portal-framework
正常的portal端框架(待开发)