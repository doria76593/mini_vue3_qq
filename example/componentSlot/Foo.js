import { h, renderSlots } from '../../lib/guide-mini-vue.esm.js'

export const Foo = {
  nane: 'foo',
  setup() {
    return {}
  },
  render() {
    const foo = h('p', {}, 'foo33')
    console.log('$slots11', this.$slots)
    // 1-单个插槽
    // return h('div', {}, [foo, this.$slots])
    // 2-插槽是一个数组
    // return h('div', {}, [foo, renderSlots(this.$slots)])
    // return h('div', {}, 'foo223')

    // Foo .vnode. children
    // console.log(this.$slots)
    // children -> vnode
    //
    // renderSlots
    // 3-具名插槽
    // 1. 获取到要渲染的元素 1
    // 2. 要获取到渲染的位置
    // return h('div', {}, [renderSlots(this.$slots, 'header'), foo, renderSlots(this.$slots, 'footer')])

    // 4-作用域插槽

    const age = 18
    return h('div', {}, [
      renderSlots(this.$slots, 'header', {
        age,
      }),
      foo,
      renderSlots(this.$slots, 'footer'),
    ])
  },
}
