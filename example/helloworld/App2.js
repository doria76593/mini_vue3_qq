import { h } from '../../lib/guide-mini-vue.esm.js'
import { Foo } from './Foo2.js'

export const App = {
  name: 'App',
  render() {
    // emit
    return h('div', {}, [
      h('div', {}, 'App'),
      h(Foo, {
        onAdd(a, b) {
          // console.log('onAdd 222')
          console.log('onAdd', a, b)
        },
        onAddFoo() {
          console.log('onAddFoo')
        },
      }),
    ])
  },

  setup() {
    return {}
  },
}
