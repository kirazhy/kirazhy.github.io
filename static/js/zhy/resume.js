const resume = new Vue({
  el: '#resume',
  data: resume_database,
  methods: {
    filterTag: function (value, row) {
      return row.level === value;
    }
  }
})
