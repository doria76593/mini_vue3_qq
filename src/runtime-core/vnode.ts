export function createVNode(type, props?, children?) {
  // console.log('createVNode')
  // console.log(type, props, children)
  const vnode = {
    type,
    props,
    children,
    el: null,
  }

  return vnode
}
