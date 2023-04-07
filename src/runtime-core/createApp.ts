import { render } from './renderer'
import { createVNode } from './vnode'

export function createApp(rootComponent) {
  return {
    // 1.1挂载到根组件
    mount(rootContainer) {
      // 1.2把component转化为 VNode ,所以逻辑操作 都会基于vnode做处理
      const vnode = createVNode(rootComponent)
      // console.log('vnode')
      // console.log(vnode)
      //   1.3 render 进一步处理
      render(vnode, rootContainer)
    },
  }
}
