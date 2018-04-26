Vue.component('hello-world', {
  name: 'HelloWorld',
  template: '#hello-world-template',
  data: function() {
    return {
      inputTesting: ''
    }
  },
  methods: {
    clickItem: function() {

    }
  },
  mounted: function() {
    console.log('loaded');
  }
});

Vue.component('second-test', {
  name: 'SecondTest',
  template: '#second-test-template',
  data: function() {
    return {
      domData: ''
    }
  },
  methods: {
    putInDom: function() {
      this.domData = 'Lorem ipsum dolor stuff'
    }
  },
  mounted: function() {
    console.log('loaded');
  }
});