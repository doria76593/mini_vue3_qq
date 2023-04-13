import { h, createTextVNode } from '../../lib/guide-mini-vue.esm.js'
import { Foo } from './Foo.js'

export const App = {
  name: 'App',
  render() {
    const app = h('div', {}, 'App')
    // 1-基本的渲染插槽
    // const foo = h(Foo, {}, h('p', {}, '123'))

    // 2-渲染一个数组
    // const foo = h(Foo, {}, [h('p', {}, '123'), h('p', {}, '456')])

    // 3-命名插槽
    // object key
    // const foo = h(
    //   Foo,
    //   {},
    //   {
    //     header: h('p', {}, 'header'),
    //     footer: h('p', {}, 'footer'),
    //   }
    // )
    // return h('div', {}, [app, foo])

    // 4-作用域插槽

    const foo = h(
      Foo,
      {},
      {
        // header: ({ age }) => h('p', {}, 'header' + age),
        header: ({ age }) => [h('p', {}, 'header' + age), createTextVNode('你好呀')],
        footer: () => h('p', {}, 'footer'),
      }
    )
    return h('div', {}, [app, foo])
  },

  setup() {
    return {}
  },
}
