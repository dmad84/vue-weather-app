import Vue from 'vue'
import Weather from '@/components/Weather'

describe('Weather.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Weather)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('weather app')
  })
})
