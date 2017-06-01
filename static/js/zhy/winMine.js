const win_mine = new Vue({
  el: '#win-mine',
  data: {
    //列数
    col_count: 9,
    //行数
    row_count: 9,
    //标记后剩余雷数
    mine_count: 10,
    //地雷位置set数组，不重复
    mine_array: new Set(),
  },
  computed: {
    total_count: function () {
      return this.width_count * this.height_count;
    }
  },
  mounted: function () {
    $('.mine-main').width($('.winMine-body').width());
    //阻止右键点击弹出菜单
    $('.mine-box').contextmenu(function (error) {
      return false;
    });
    this.start();
  },
  watch: {
    //观察当ming_count等于零时获胜
    mine_count: function () {
      if (this.mine_count === 0) {
        console.log('success');
      }
    }
  },
  methods: {
    //构造雷格对象
    createBox: function (y, x, mine) {
      this.position = 1; //1在雷区里面，0不在
      this.y = y;
      this.x = x;
      this.mine = mine; //1有雷，0无
      this.on = 0; //0未扫，1已扫，2已标记
      this.t_l = {
        y: y - 1,
        x: x - 1
      }; //左上格子坐标
      this.t_c = {
        y: y - 1,
        x: x
      }; //上
      this.t_r = {
        y: y - 1,
        x: x + 1
      }; //右上
      this.b_l = {
        y: y + 1,
        x: x - 1
      }; //左下
      this.b_c = {
        y: y + 1,
        x: x
      }; //下
      this.b_r = {
        y: y + 1,
        x: x + 1
      }; //右下
      this.l = {
        y: y,
        x: x - 1
      }; //左 
      this.r = {
        y: y,
        x: x + 1
      }; //右
    },
    //得到不重复的地雷位置数组，默认10个，[row,col]
    nonRepeatRandom(count = 10) {
      this.mine_array.clear();
      while (this.mine_array.size < count) {
        this.mine_array.add([Math.floor(Math.random() * this.row_count + 1), Math.floor(Math.random() * this.col_count + 1)]);
      }
    },
    //将name坐标格式化
    boxNameFormat(name) {
      return name.split('-').map(function (item, index, array) {
        return parseInt(item);
      });
    },
    //判断一个格子的坐标是否属于一个set
    checkBox(set, name) {
      let temp = this.boxNameFormat(name);
      for (let item of set) {
        if (temp.toString() == item.toString()) {
          return true;
        }
      }
      return false;
    },
    //方块点击事件
    boxClick(event) {
      let $target = $(event.target);
      switch (event.buttons) {
        case 1: //左键点击
          //如果没有点过
          if (!$target.hasClass('clicked')) {
            //如果是地雷，则输
            if (this.checkBox(this.mine_array, $target.attr('name'))) {
              $target.addClass('clicked mine');
              console.log('game over');
            }
            //如果不是地雷，则判断周围的格子
            else {}
          }
          break;
        case 2: //右键点击
          //如果没有点过，则添加flag标记
          if (!$target.hasClass('clicked')) {
            $target.addClass('clicked flag');
            this.mine_count--;
          }
          //如果点过，且被标记过，则取消flag标记
          else if ($target.hasClass('clicked flag')) {
            $target.removeClass('clicked flag');
            this.mine_count++;
          }
          break;
        default:
          break;
      }
    },
    //重新开始游戏
    start: function (event) {
      this.reset();
      this.nonRepeatRandom(this.mine_count);
      console.log(this.mine_array);
    },
    //重置游戏
    reset: function () {
      this.mine_count = 10;
      $('.mine-box').removeClass('border-down flag mine').addClass('border-up');
    }
  }
})
