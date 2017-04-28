const home_page = new Vue({
  el: '#home-page',
  data: {
    introduces: [
      {
        background: 'background-image:url(../static/img/show.jpg)',
        title: '这是我的第一个个人网站作品',
        content: '经过了我的不懈努力，我的第一个网站作品雏形已经完成了，在我的网站里，我会介绍我的一些个人信息，这些信息可以用来在我面试的时候进行一些加分。'
      }, {
        background: 'background-image:url(../static/img/bridge.jpg)',
        title: '我的技术展示',
        content: '在这里我会利用我所掌握的技术，比如说Vue.js框架、element-ui组件库和CSS使用技巧等技术。'
      }
    ]
  }
})
