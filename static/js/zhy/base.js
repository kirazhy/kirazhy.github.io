const base = new Vue({
  el: '#base',
  data: {
    //版本
    version: '1.2.0',
    //导航栏
    navs: [
      {
        index: '1',
        icon: 'fa-home',
        title: '首页',
        href: './template/homePage.html'
      },
      {
        index: '2',
        icon: 'fa-address-card',
        title: '自我介绍',
        href: './template/resume.html'
      },
      {
        index: '3',
        icon: 'fa-upload',
        title: '更新日志',
        href: './template/changeLog.html'
      }
    ],
    //页脚popover
    popovers: [
      {
        ref: 'contact',
        width: '170',
        title: '联系方式',
        contents: [
          '电话:13671250323', '邮件:kirazhy@sina.com'
        ],
        icon: 'fa-phone'
      },
      {
        ref: 'address',
        width: '200',
        title: '公司地址',
        contents: [
          'Beijing Office: C417, Kempinski Hotel,Liangmaqiao Road ,Chaoyang District.', "Hong Kong Office:1501,Grand Millennium Plaza (Lower Block),181 Queen's Road Central."
        ],
        icon: 'fa-address-book'
      }
    ],
  },
  mounted: function () {
    this.isChrome();
  },
  methods: {
    //上传服务器时调用
    changeFrameHeight: function (event) {
      var main_height = $(event.target).contents().find("body").height();
      $(event.target).height(main_height);
    },
    //鼠标进入menu则i旋转
    iSpin: function (event) {
      $(event.target).find('i').addClass('fa-spin');
    },
    //鼠标离开menu则i停止
    iStop: function (event) {
      $(event.target).find('i').removeClass('fa-spin');
    },
    //浏览器检测
    isChrome: function () {
      if (!(window.navigator.userAgent.indexOf("Chrome") !== -1)) {
        this.$notify({
          title: '警告',
          message: '请使用Chrome浏览器',
          type: 'warning'
        });
      } else {
        this.$notify({
          title: '成功',
          message: '欢迎来到我的个人网站',
          type: 'success'
        });
      }
    }
  }
});
