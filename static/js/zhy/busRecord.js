const bus_record = new Vue({
  el: '#bus-record',
  data: {
    records: [{
      date: '2017.4.27',
      come_speed: '快',
      people_num: '中',
      congestion_degree: '极通畅',
      seat: '有',
      travel_time: 85
    }, {
      date: '2017.4.28',
      come_speed: '中',
      people_num: '中',
      congestion_degree: '极拥堵',
      seat: '有',
      travel_time: 130
    }, {
      date: '2017.5.3',
      come_speed: '慢',
      people_num: '中+',
      congestion_degree: '中',
      seat: '无',
      travel_time: 100
    }, {
      date: '2017.5.4',
      come_speed: '快',
      people_num: '中',
      congestion_degree: '通畅',
      seat: '无',
      travel_time: 75
    }, {
      date: '2017.5.9',
      come_speed: '中',
      people_num: '少',
      congestion_degree: '通畅',
      seat: '无',
      travel_time: 95
    }, {
      date: '2017.5.10',
      come_speed: '中',
      people_num: '中',
      congestion_degree: '通畅',
      seat: '有',
      travel_time: 95
    }, {
      date: '2017.5.11',
      come_speed: '慢',
      people_num: '多',
      congestion_degree: '通畅',
      seat: '无',
      travel_time: 105
    }, {
      date: '2017.5.12',
      come_speed: '快',
      people_num: '少',
      congestion_degree: '通畅',
      seat: '有',
      travel_time: 95
    }, {
      date: '2017.5.15',
      come_speed: '快',
      people_num: '多',
      congestion_degree: '通畅',
      seat: '无',
      travel_time: 125
    }],
    come_speed_level: ['快', '中', '慢'],
    people_num_level: ['少', '少+', '中', '中+', '多', '多+'],
    congestion_degree_level: ['极通畅', '通畅', '中', '拥堵', '极拥堵']
  },
  mounted: function () {
    this.drawComeSpeed();;
  },
  methods: {
    //986到达速度图
    drawComeSpeed: function () {
      var comeSpeedChart = echarts.init(document.getElementById('come-speed'));
      var come_speed_array = [];
      var date_array = [];
      for (var i in this.records) {
        date_array.push(this.records[i].date);
        come_speed_array.push([this.records[i].date, this.records[i].come_speed]);
      }
      var option = {
        title: {
          text: '986到达速度'
        },
        legend: {
          data: ['到达速度']
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
          data: date_array
        },
        yAxis: {
          type: 'category',
          data: this.come_speed_level
        },
        series: [{
          name: '到达速度',
          type: 'bar',
          data: come_speed_array
            }]
      };
      comeSpeedChart.setOption(option);
    },
    //986乘客规模图
    drawPeopleNum: function () {
      var peopleNumChart = echarts.init(document.getElementById('people-num'));
      var people_num_array = [];
      var date_array = [];
      for (var i in this.records) {
        date_array.push(this.records[i].date);
        people_num_array.push([this.records[i].date, this.records[i].people_num]);
      }
      var option = {
        title: {
          text: '986乘客规模'
        },
        legend: {
          data: ['乘客规模']
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
          data: date_array
        },
        yAxis: {
          type: 'category',
          data: this.people_num_level
        },
        series: [{
          name: '乘客规模',
          type: 'bar',
          data: people_num_array
            }]
      };
      peopleNumChart.setOption(option);
    },
    //十八里店桥拥堵程度图
    drawCongestionDegree: function () {
      var congestionDegreeChart = echarts.init(document.getElementById('congestion-degree'));
      var congestion_degree_array = [];
      var date_array = [];
      for (var i in this.records) {
        date_array.push(this.records[i].date);
        congestion_degree_array.push([this.records[i].date, this.records[i].congestion_degree]);
      }
      var option = {
        title: {
          text: '十八里店桥拥堵程度'
        },
        legend: {
          data: ['拥堵程度']
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
          data: date_array
        },
        yAxis: {
          type: 'category',
          data: this.congestion_degree_level
        },
        series: [{
          name: '拥堵程度',
          type: 'bar',
          data: congestion_degree_array
            }]
      };
      congestionDegreeChart.setOption(option);
    },
    //横街子前是否有座图
    drawSeat: function () {
      var seatChart = echarts.init(document.getElementById('seat'));
      var seat_true = 0;
      var seat_false = 0;
      var date_array = [];
      for (var i in this.records) {
        date_array.push(this.records[i].date);
        if (this.records[i].seat === '有') {
          seat_true++;
        } else {
          seat_false++;
        }
      }
      var option = {
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
        series: [
          {
            name: '是否有座',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {
                value: seat_true,
                name: '有'
              },
              {
                value: seat_false,
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
          }
        ]
      };
      seatChart.setOption(option);
    },
    //路上时间图
    drawTravalTime: function () {
      var travalTimeChart = echarts.init(document.getElementById('traval-time'));
      var travel_time_array = [];
      var date_array = [];
      for (var i in this.records) {
        date_array.push(this.records[i].date);
        travel_time_array.push(this.records[i].travel_time);
      }
      var option = {
        title: {
          text: '路上时间'
        },
        legend: {
          data: ['路上时间']
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0];
            return params.name + '<br>' + '到家时间：' + (18 + Math.floor(params.value / 60)) + ':' + ((params.value % 60) >= 10 ? params.value % 60 : '0' + params.value % 60);
          },
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
          data: date_array
        },
        yAxis: {
          axisLabel: {
            formatter: '{value} min'
          },
        },
        series: [{
          name: '路上时间',
          type: 'bar',
          data: travel_time_array
            }]
      };
      travalTimeChart.setOption(option);
    },
    //切换标签页
    onTabClick: function (tabs) {
      switch (tabs.index) {
        case '0':
        default:
          this.drawComeSpeed();
          break;
        case '1':
          this.drawPeopleNum();
          break;
        case '2':
          this.drawCongestionDegree();
          break;
        case '3':
          this.drawSeat();
          break;
        case '4':
          this.drawTravalTime();
          break;
      }
    }
  }
})
