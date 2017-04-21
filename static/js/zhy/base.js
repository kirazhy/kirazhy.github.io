var base = new Vue({
  el: '#base',
  data: {
    //版本
    version: 1.1.1,
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
        index:'30',
        icon:'',
        title:'another',
        href:'./template/another.html'
      }
    ],
    //页脚popover
    popovers: [
      {
        ref: 'contact',
        width: '170',
        title: '联系方式',
        contents: [
          'Tel:13671250323', 'Email:kirazhy@sina.com'
        ],
        icon: 'el-icon-message'
      },
      {
        ref: 'address',
        width: '200',
        title: '公司地址',
        contents: [
          'Beijing Office: C417, Kempinski Hotel,Liangmaqiao Road ,Chaoyang District.', "Hong Kong Office:1501,Grand Millennium Plaza (Lower Block),181 Queen's Road Central."
        ],
        icon: 'el-icon-information'
      }
    ],
  },
  methods: {
    /*上传服务器时调用*/
    changeFrameHeight(event) {
      var mainheight = $(event.target).contents().find("body").height();
      $(event.target).height(mainheight);
    },
    //鼠标进入menu则i旋转
    iSpin(event) {
      $(event.target).find('i').addClass('fa-spin');
    },
    //鼠标离开menu则i停止
    iStop(event) {
      $(event.target).find('i').removeClass('fa-spin');
    }
  }
});
