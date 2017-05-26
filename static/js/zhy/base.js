const base = new Vue({
  el: '#base',
  data: base_database,
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
