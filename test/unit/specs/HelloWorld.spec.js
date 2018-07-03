import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import VueResource from 'vue-resource'
Vue.use(VueResource)

const http = require('http');

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('weather app')
  })
})
