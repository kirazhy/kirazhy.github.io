# ZHY's Personal Website
# 张华一的个人网站
---
## just a static website to introduce my self and to be putted on git webserver
## 这只是用来放在git服务器上，用来介绍我自己的静态网站
---
### Devtools
* element-ui 1.2.8
* jQuery 3.2.1
* Font Awesome 4.7.0
* Vue.js 2.2.6
* echarts.js 3.5.4
* JavaScript ECMA6

### 编码规范
* CSS变量命名规范：元素名_属性名
* JavaScript变量命名规范：_分隔
* JavaScript函数命名规范：驼峰法
* HTML中class、id命名规范：-分隔
* JavaScript中使用单引号，HTML中使用双引号
* 版本更新规范：版本更新遵循x.y.z原则：只修改bug则迭代z、页面有较大变动则迭代y、页面有颠覆性的变动则迭代x
* 文件命名规范：HTML使用驼峰法，不加复数，JavaScript与CSS使用与相对应HTML文件相同的名称
* 文件引入规范：在<head>中先引入CSS，再引入JavaScript库。在引入CSS时，先引入reset.js文件初始化样式，再引入各样式库，最后引入当前页面的CSS文件。在引入JavaScript时，先引入jQuery，再引入Vue.js，再引入库。最后在</body>后引入当前页面的JavaScript文件
* 数据文件规范：每个Vue对象的data数据文件存放在dataBase文件夹中，数据文件使用驼峰法命名，使用const声明数据

### changelog
* 1.0.0 完成了页面的雏形
* 1.1.0 添加了个人简历页面
* 1.1.1 使用Font Awesome图表库，并且在nav中添加了hover功能使图标旋转
* 1.2.0 设计并实现了homePage页面，并且添加了changeLog页面
* 1.2.1 调整了页眉标题文字，添加页脚微博、LinkedIn、facebook链接，基本完成了公交记录页面
* 1.2.2 添加了json数据库文件，使用v-text和v-cloak来减少页面闪烁
* 1.2.3 添加google分析，使用计算属性代替函数内变量，使用let代替var，添加了换乘前公交类型图，添加了柱状图和饼图的切换功能
* 1.2.4 添加twitter链接

Author:kirazhy
作者：张华一