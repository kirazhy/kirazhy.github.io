const resume = new Vue({
  el: '#resume',
  data: {
    //个人信息
    personal_info: {
      name_cn: '张华一',
      name_en: 'Huayi Zhang',
      gender: '男',
      birth: '1992.3.23',
      political: '群众',
      tel: '+86 13671250323'
    },
    //学历信息
    education_information: [{
      duration: '2014.9-2017.3',
      school: '北京邮电大学',
      college: '信息与通信工程学院',
      major: '信息与通信工程',
      degree: '工学硕士'
    }, {
      duration: '2010.9-2014.6',
      school: '北京邮电大学',
      college: '信息与通信工程学院',
      major: '通信工程',
      degree: '工学学士'
    }, {
      duration: '2007.9-2010.6',
      school: '北京市第八十中学',
      college: '高中部',
      degree: '高中'
    }, {
      duration: '2004.9-2007.6',
      school: '北京市第八十中学',
      college: '初中部',
      degree: '初中'
    }],
    //项目经历
    project_experience: [{
      duration: '2014.2-2014.6',
      name: '基于认知无线电的物联网感知延伸层动态组网方法研究',
      role: '本科毕设，独自完成',
      size: 1,
      description: '利用Matlab仿真认知无线电CR在不同环境复杂度下物联网的环境干扰率',
      outcome: '学习了Matlab的应用，了解了有关认知无线电的概念，利用此研究项目获得学士学位'
    }, {
      duration: '2014.4-2015.9',
      name: '高速跳频下感知无线电决策端软件部分的设计与实现',
      role: '图像显示部分的实现、整体系统的调试与验错',
      size: 4,
      description: '利用MFC和socket等工具编写windows应用程序，此程序接受来自硬件部分的频谱信号并进行计算处理，最后在程序窗口显示频谱图像',
      outcome: '期间我自学了VC++、MFC和socket等知识，学习了图表制作工具ProEssentials 7，帮助师兄完成硕士毕业论文'
    }, {
      duration: '2015.9-2016.2',
      name: '基于高德地图的智能巡检系统地图模块的设计与实现',
      role: '与实验室同学一同研究',
      size: 2,
      description: '利用高德地图API设计并实现在智能巡检系统中WEB端和Android终端的地图显示功能',
      outcome: '此项目是智能巡检系统这个大项目中的一部分，我负责这一部分。在这期间我自学了Android开发技术，学习了Android Studio和MyEclipse的使用，不过最终为了开发令一个项目而放弃了此项目'
    }, {
      duration: '2016.3-2017.3',
      name: '基于B/S架构的图片档案管理系统',
      role: '前端页面的实现',
      size: 2,
      description: '我与另一名实验室同学共同研究，我负责前端页面，他负责Java后台',
      outcome: '自学了HTML5+CSS3、JavaScript、jQuery等语言或技术，使用Brackets和IDEA等IDE进行编写，利用此研究项目获得硕士学位。在毕业后交接给学弟学妹继续开发'
    }, {
      duration: '2016.9-2016.11',
      name: '一带一路经济平台demo',
      role: '数据可视化功能前端工程师',
      size: 2,
      description: '在实习公司参与了一带一路国家经济平台中数据可视化功能的实现，以及部分页面的调试。期间我学习并使用了百度公司的开源数据可视化工具：echarts',
      outcome: '在本项目中，我完成了数据可视化功能部分的工作，并向国家图书馆资料库的工作人员进行了展示。本项目demo网站的网址如下：http://noaiii.pythonanywhere.com/company/'
    }, {
      duration: '2016.11-今',
      name: 'PNC后台管理系统',
      role: '研发工程师',
      size: 3,
      description: '这是实习公司的后台工作人员管理系统。本系统实现了邮件群发、客户数据库、项目库、投资人库的增删改查等功能。我在本项目中担任项目主管，在协调工作小组成员的同时还完成了本系统邮件相关功能的前端页面，以及系统工作人员的数据管理页面。在本项目中，我使用到了Vue.js框架、element-ui、百度公司的开源数据可视化工具echarts等',
      outcome: '由于这是公司内部的后台管理系统，故无法公布系统网址。此系统已经完成了后台数据库的搭建和前端页面的编写，并且前后台也已经完成了API接口的编写与使用，邮件群发功能、客户的增删改查等功能都已完成，只剩下一些页面和功能的完善'
    }, {
      duration: '2017.3-今',
      name: 'PNC官网的整改与功能扩展',
      role: '研发工程师',
      size: 1,
      description: '在前人的基础上，将不易进行维护扩展的代码进行了修改，添加了新的页面以迎合公司的业务扩展',
      outcome: '顺利完成了PNC官网的整改和功能扩展，添加了动态效果以提高用户的浏览体验，成果如下：http://www.pandanewcapital.com/'
    }],
    //专业技能分级
    level_filter: [{
      text: '了解',
      value: '了解'
    }, {
      text: '熟悉',
      value: '熟悉'
    }, {
      text: '掌握',
      value: '掌握'
    }, {
      text: '精通',
      value: '精通'
    }],
    //专业技能
    professional_skill: [{
      skill: 'HTML5',
      level: '掌握'
    }, {
      skill: 'CSS3',
      level: '熟悉'
    }, {
      skill: 'JavaScript',
      level: '掌握'
    }, {
      skill: 'jQuery',
      level: '掌握'
    }, {
      skill: 'Vue.js',
      level: '熟悉'
    }, {
      skill: 'Office',
      level: '精通'
    }, {
      skill: 'MFC',
      level: '了解'
    }, {
      skill: 'Java',
      level: '了解'
    }, {
      skill: 'Labview',
      level: '了解'
    }, {
      skill: 'VHDL',
      level: '熟悉'
    }, {
      skill: 'C++',
      level: '熟悉'
    }]
  },
  methods: {
    filterTag: function (value, row) {
      return row.level === value;
    }
  }
})
