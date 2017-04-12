var base = new Vue({
  el: '#base',
  data: {
    //导航栏
    navs: [
      {
        index: '1',
        title: '首页',
        href: './template/homePage.html'
      },
      {
        index: '2',
        title: '自我介绍',
        href: './template/resume.html'
      }
    ],
    //页脚标题
    footer_main_title: "Huayi Zhang's 1.0 Personal Website",
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
    changeFrameHeight(event) {
      var mainheight = $(event.target).contents().find("body").height() + 30;
      $(event.target).height(mainheight);
    }
  }
});
