import { h } from '../../lib/guide-mini-vue.esm.js'

export const App = {
  // 必须要写 render
  render() {
    // ui
    // return h('div', 'hi, ' + this.msg)
    return h('div', 'hi, mini-vue')
  },

  setup() {
    return {
      msg: 'mini-vue',
    }
  },
}
