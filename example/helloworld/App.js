import { h } from '../../lib/guide-mini-vue.esm.js'

window.self = null
export const App = {
  // 必须要写 render
  render() {
    window.self = this
    // ui
    return h('div', { id: 'myapp', class: ['red', 'pink'] }, 'hi, ' + this.msg)
    // return h(
    //   'div',
    // { id: 'myapp', class: 'red' },
    // { id: 'myapp', class: ['red', 'pink'] },
    // 'hi, mini-vue'
    // [h('p', { class: 'red' }, 'hi'), h('p', { class: 'blue' }, 'mini-vue')]
    // )
  },

  setup() {
    return {
      msg: 'mini-vue3333',
    }
  },
}
