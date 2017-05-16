const base = new Vue({
  el: '#base',
  data: {
    //版本
    version: '1.2.1',
    //导航栏
    navs: [
      {
        index: '1',
        icon: 'fa-home',
        title: '首页',
        href: './template/homePage.html'
      }, {
        index: '2',
        icon: 'fa-address-card',
        title: '个人简历',
        href: './template/resume.html'
      }, {
        index: '3',
        icon: 'fa-bus',
        title: '公交记录',
        href: './template/busRecord.html'
      }
    ],
    //页脚popover
    popovers: [
      {
        ref: 'contact',
        title: '联系方式',
        contents: [
          '电话:+86 13671250323', 'QQ:1039824096', '电子邮件:kirazhy@sina.com'
        ],
        icon: 'fa-phone'
      },
      {
        ref: 'address',
        title: '公司地址',
        contents: [
          '北京办公室：朝阳区亮马桥路凯宾斯基酒店C417', "香港办公室：皇后大道中181号新纪元广场1501"
        ],
        icon: 'fa-address-book'
      }
    ],
    links: [
      {
        href: 'https://github.com/kirazhy/kirazhy.github.io',
        icon: 'fa-github'
      },
      {
        href: 'https://www.linkedin.com/in/%E5%8D%8E%E4%B8%80-%E5%BC%A0-930358142/',
        icon: 'fa-linkedin'
      },
      {
        href: 'javascript:;',
        icon: 'fa-facebook'
      },
      {
        href: 'https://www.instagram.com/huayizhang1412/',
        icon: 'fa-instagram'
      }
    ]
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
          title: 'Warning',
          message: 'Please use the latest Chrome Browser',
          type: 'warning'
        });
      } else {
        this.$notify({
          title: 'Welcome',
          message: 'Welcome to my Personal Websit',
          type: 'success'
        });
      }
    }
  }
});
