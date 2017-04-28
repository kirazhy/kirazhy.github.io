const change_log = new Vue({
  el: '#change-log',
  data: {
    change_logs: [{
      version: '1.0.0',
      change: '完成了页面的雏形'
    }, {
      version: '1.1.0',
      change: '添加了个人简历页面'
    }, {
      version: '1.1.1',
      change: '使用Font Awesome图表库，并且在nav中添加了hover功能使图标旋转'
    }, {
      version: '1.2.0',
      change: '设计并实现了homepage页面，并且添加了changelog页面'
    }]
  }
})
