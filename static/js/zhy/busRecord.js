const bus_record = new Vue({
  el: '#bus-record',
  data: bus_record_database,
  computed: {
    //总体的日期数组
    date_array: function () {
      return Array.from(this.records, elem => elem.date);
    },
    //到达速度数组
    come_speed_array: function () {
      return Array.from(this.records, elem => [elem.date, elem.come_speed]);
    },
    //乘客规模数组
    people_num_array: function () {
      return Array.from(this.records, elem => [elem.date, elem.people_num]);
    },
    //拥堵程度数组
    congestion_degree_array: function () {
      return Array.from(this.records, elem => [elem.date, elem.congestion_degree]);
    },
    //路上时间数组
    travel_time_array: function () {
      return Array.from(this.records, elem => elem.travel_time);
    },
    //是否有座记录
    seat_records: function () {
      return this.records.filter(function (elem) {
        return typeof elem.seat !== 'undefined';
      })
    },
    //公交类型记录
    bus_type_records: function () {
      return this.records.filter(function (elem) {
        return typeof elem.bus_type !== 'undefined';
      })
    },
    //公交类型记录中的日期数组
    date_for_bus_type_array: function () {
      return Array.from(this.bus_type_records, elem => elem.date);
    },
    //公交类型数组
    bus_type_array: function () {
      return Array.from(this.bus_type_records, elem => [elem.date, elem.bus_type]);
    },
    //到达速度数量对象
    come_speed_sum: function () {
      //['快', '快+', '中', '中+', '慢', '慢+']
      let temp_obj = {
        fast: 0,
        fast_plus: 0,
        middle: 0,
        middle_plus: 0,
        slow: 0,
        slow_plus: 0
      };
      for (elem of this.records) {
        switch (elem.come_speed) {
          case '快':
            temp_obj.fast++;
            break;
          case '快+':
            temp_obj.fast_plus++;
            break;
          case '中':
            temp_obj.middle++;
            break;
          case '中+':
            temp_obj.middle_plus++;
            break;
          case '慢':
            temp_obj.slow++;
            break;
          default:
            temp_obj.slow_plus++;
            break;
        }
      }
      return temp_obj;
    },
    //乘客规模数量对象
    people_num_sum: function () {
      //['少', '少+', '中', '中+', '多', '多+']
      let temp_obj = {
        few: 0,
        few_plus: 0,
        middle: 0,
        middle_plus: 0,
        huge: 0,
        huge_plus: 0
      };
      for (elem of this.records) {
        switch (elem.people_num) {
          case '少':
            temp_obj.few++;
            break;
          case '少+':
            temp_obj.few_plus++;
            break;
          case '中':
            temp_obj.middle++;
            break;
          case '中+':
            temp_obj.middle_plus++;
            break;
          case '多':
            temp_obj.huge++;
            break;
          default:
            temp_obj.huge_plus++;
            break;
        }
      }
      return temp_obj;
    },
    //拥堵程度数量对象
    congestion_degree_sum: function () {
      //['极通畅', '通畅', '中', '拥堵', '极拥堵']
      let temp_obj = {
        very_unobstructed: 0,
        unobstructed: 0,
        middle: 0,
        congestion: 0,
        very_congestion: 0
      };
      for (elem of this.records) {
        switch (elem.congestion_degree) {
          case '极通畅':
            temp_obj.very_unobstructed++;
            break;
          case '通畅':
            temp_obj.unobstructed++;
            break;
          case '中':
            temp_obj.middle++;
            break;
          case '拥堵':
            temp_obj.congestion++;
            break;
          default:
            temp_obj.very_congestion++;
            break;
        }
      }
      return temp_obj;
    },
    //是否有座数量对象
    seat_sum: function () {
      //['有','无']
      let temp_obj = {
        true: 0,
        false: 0
      };
      for (elem of this.seat_records) {
        elem.seat === '有' ? temp_obj.true++ : temp_obj.false++;
      }
      return temp_obj;
    },
    //换乘前公交类型数量对象
    bus_type_sum: function () {
      //['地铁', '300', '300快']
      let temp_obj = {
        subway: 0,
        _300: 0,
        _300_fast: 0,
      };
      for (elem of this.bus_type_records) {
        switch (elem.bus_type) {
          case '地铁':
            temp_obj.subway++;
            break;
          case '300':
            temp_obj._300++;
            break;
          default:
            temp_obj._300_fast++;
            break;
        }
      }
      return temp_obj;
    },
  },
  mounted: function () {
    this.drawComeSpeed(1);
  },
  methods: {
    //986到达速度图，type：1柱状图，type：2饼图
    drawComeSpeed: function (type) {
      let comeSpeedChart = echarts.init(document.getElementById('come-speed'));
      let option = {
        title: {
          text: '986到达速度'
        },
        legend: {
          data: type === 1 ? ['到达速度'] : ['快', '快+', '中', '中+', '慢', '慢+']
        },
        toolbox: type === 1 ? {
          feature: {
            magicType: {
              type: ['line', 'bar']
            },
            saveAsImage: {}
          }
        } : undefined,
        tooltip: {
          trigger: 'item',
          formatter: type === 1 ? '{a} <br/> {c}' : '{a} <br/>{b} : {c} ({d}%)'
        },
        xAxis: type === 1 ? {
          data: this.date_array
        } : undefined,
        yAxis: type === 1 ? {
          type: 'category',
          data: this.come_speed_level
        } : undefined,
        series: type === 1 ? [{
          name: '到达速度',
          type: 'bar',
          data: this.come_speed_array
            }] : [{
          name: '到达速度',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [{
            value: this.come_speed_sum.fast,
            name: '快'
              }, {
            value: this.come_speed_sum.fast_plus,
            name: '快+'
              }, {
            value: this.come_speed_sum.middle,
            name: '中'
              }, {
            value: this.come_speed_sum.middle_plus,
            name: '中+'
              }, {
            value: this.come_speed_sum.slow,
            name: '慢'
              }, {
            value: this.come_speed_sum.slow_plus,
            name: '慢+'
              }],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
            }]
      };
      comeSpeedChart.setOption(option);
    },
    //986乘客规模图
    drawPeopleNum: function (type) {
      let peopleNumChart = echarts.init(document.getElementById('people-num'));
      let option = {
        title: {
          text: '986乘客规模'
        },
        legend: {
          data: type === 1 ? ['乘客规模'] : ['少', '少+', '中', '中+', '多', '多+']
        },
        toolbox: type === 1 ? {
          feature: {
            magicType: {
              type: ['line', 'bar']
            },
            saveAsImage: {}
          }
        } : undefined,
        tooltip: {
          trigger: 'item',
          formatter: type === 1 ? "{a} <br/> {c}" : "{a} <br/>{b} : {c} ({d}%)"
        },
        xAxis: type === 1 ? {
          data: this.date_array
        } : undefined,
        yAxis: type === 1 ? {
          type: 'category',
          data: this.people_num_level
        } : undefined,
        series: type === 1 ? [{
          name: '乘客规模',
          type: 'bar',
          data: this.people_num_array
            }] : [{
          name: '乘客规模',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [{
            value: this.people_num_sum.few,
            name: '少'
              }, {
            value: this.people_num_sum.few_plus,
            name: '少+'
              }, {
            value: this.people_num_sum.middle,
            name: '中'
              }, {
            value: this.people_num_sum.middle_plus,
            name: '中+'
              }, {
            value: this.people_num_sum.huge,
            name: '多'
              }, {
            value: this.people_num_sum.huge_plus,
            name: '多+'
              }],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
            }]
      };
      peopleNumChart.setOption(option);
    },
    //十八里店桥拥堵程度图
    drawCongestionDegree: function (type) {
      let congestionDegreeChart = echarts.init(document.getElementById('congestion-degree'));
      let option = {
        title: {
          text: '十八里店桥拥堵程度'
        },
        legend: {
          data: type === 1 ? ['拥堵程度'] : ['极通畅', '通畅', '中', '拥堵', '极拥堵']
        },
        toolbox: type === 1 ? {
          feature: {
            magicType: {
              type: ['line', 'bar']
            },
            saveAsImage: {}
          }
        } : undefined,
        tooltip: {
          trigger: 'item',
          formatter: type === 1 ? "{a} <br/> {c}" : "{a} <br/>{b} : {c} ({d}%)"
        },
        xAxis: type === 1 ? {
          data: this.date_array
        } : undefined,
        yAxis: type === 1 ? {
          type: 'category',
          data: this.congestion_degree_level
        } : undefined,
        series: type === 1 ? [{
          name: '拥堵程度',
          type: 'bar',
          data: this.congestion_degree_array
            }] : [{
          name: '拥堵程度',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [{
            value: this.congestion_degree_sum.very_unobstructed,
            name: '极通畅'
              }, {
            value: this.congestion_degree_sum.unobstructed,
            name: '通畅'
              }, {
            value: this.congestion_degree_sum.middle,
            name: '中'
              }, {
            value: this.congestion_degree_sum.congestion,
            name: '拥堵'
              }, {
            value: this.congestion_degree_sum.very_congestion,
            name: '极拥堵'
              }],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
            }]
      };
      congestionDegreeChart.setOption(option);
    },
    //横街子前是否有座图
    drawSeat: function () {
      let seatChart = echarts.init(document.getElementById('seat'));
      let option = {
        title: {
          text: '横街子前是否有座',
        },
        legend: {
          data: ['有', '无']
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
          name: '是否有座',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [{
              value: this.seat_sum.true,
              name: '有'
              }, {
              value: this.seat_sum.false,
              name: '无'
              }
            ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      };
      seatChart.setOption(option);
    },
    //路上时间图
    drawTravalTime: function () {
      let travalTimeChart = echarts.init(document.getElementById('traval-time'));
      let option = {
        title: {
          text: '路上时间'
        },
        legend: {
          data: ['路上时间']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (params) {
            params = params[0];
            return params.name + '<br>到家时间：' + (18 + Math.floor(params.value / 60)) + ':' + ((params.value % 60) >= 10 ? params.value % 60 : '0' + params.value % 60);
          }
        },
        toolbox: {
          feature: {
            magicType: {
              type: ['line', 'bar']
            },
            saveAsImage: {}
          }
        },
        xAxis: {
          data: this.date_array
        },
        yAxis: {
          axisLabel: {
            formatter: '{value} min'
          }
        },
        series: [{
          name: '路上时间',
          type: 'bar',
          data: this.travel_time_array
            }]
      };
      travalTimeChart.setOption(option);
    },
    //换乘前公交类型图
    drawBusType: function (type) {
      let busTypeChart = echarts.init(document.getElementById('bus-type'));
      let option = {
        title: {
          text: '换乘前公交类型'
        },
        legend: {
          data: type === 1 ? ['公交类型'] : ['地铁', '300', '300快']
        },
        toolbox: type === 1 ? {
          feature: {
            magicType: {
              type: ['line', 'bar']
            },
            saveAsImage: {}
          }
        } : undefined,
        tooltip: {
          trigger: 'item',
          formatter: type === 1 ? "{a} <br/> {c}" : "{a} <br/>{b} : {c} ({d}%)"
        },
        xAxis: type === 1 ? {
          data: this.date_for_bus_type_array
        } : undefined,
        yAxis: type === 1 ? {
          type: 'category',
          data: this.bus_type_level
        } : undefined,
        series: type === 1 ? [{
          name: '公交类型',
          type: 'bar',
          data: this.bus_type_array
            }] : [{
          name: '公交类型',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [{
            value: this.bus_type_sum.subway,
            name: '地铁'
              }, {
            value: this.bus_type_sum._300,
            name: '300'
              }, {
            value: this.bus_type_sum._300_fast,
            name: '300快'
              }],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
            }]
      };
      busTypeChart.setOption(option);
    },
    //切换整体标签页
    onTabClick: function (tabs) {
      switch (tabs.name) {
        case 'come-speed':
        default:
          this.drawComeSpeed(1);
          break;
        case 'people-num':
          this.drawPeopleNum(1);
          break;
        case 'congestion-degree':
          this.drawCongestionDegree(1);
          break;
        case 'seat':
          this.drawSeat();
          break;
        case 'traval-time':
          this.drawTravalTime();
          break;
        case 'bus-type':
          this.drawBusType(1);
          break;
      }
    }
  }
})
